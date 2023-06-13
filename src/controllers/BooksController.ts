import { NextFunction, Request, Response } from "express";
import { BooksRepository } from "../repositories/BooksRepository";



class BooksController {
	private booksRepository: BooksRepository
	constructor(){
		this.booksRepository = new BooksRepository
	}
	async store(request: Request, response:Response, next:NextFunction){
		const { name, author, company, read, dateRead, description, rate } = request.body
		const { user_id } = request
		try {
			const findBooksByUserId = await this.booksRepository.findByUserId(user_id)
			const filterBooks = findBooksByUserId.find((filter, index) => {
				return (
					filter.name &&
					StringFormatter.formatString(filter.name) ===
					StringFormatter.formatString(name)
				)

			})
			if(filterBooks){
				throw new Error('Book already exists.')
			}

		}catch (error){
			next(error)
		}
	}
}

class StringFormatter{
	static formatString(str:string){
		str = str.toLowerCase()
		str = str.trim()
		str = str.normalize('NFD')

		return str
	}
}

export { BooksController }
