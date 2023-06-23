import { NextFunction, Request, Response } from "express";
import { BooksRepository } from "../repositories/BooksRepository";



class BooksController {
	private booksRepository: BooksRepository
	constructor(){
		this.booksRepository = new BooksRepository
	}
	async store(request: Request, response:Response, next:NextFunction){
		const { name, author, company,read, dateRead, description, rate } = request.body
		const { user_id } = request
		try {
			const readVerify = read ? true : false
			const dateReadVerify = dateRead ? new Date(dateRead) : null
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
			if(!readVerify && rate){
				throw new Error('You can grade only books that have benn read.')
			}


			const result = await this.booksRepository.create({
				name,
				author,
				company,
				read: readVerify,
				dateRead: dateReadVerify,
				description,
				rate,
				user_id,
			})
			return response.status(201).json(result)

			}catch (error){
				next(error)
			}
	}

		async index(request:Request, response:Response, next:NextFunction){
			const { page, size } = request.query
			const { user_id } = request

			const DEFAULT_PAGE = 1
			const DEFAULT_SIZE = 1
			try{
				const pageNumber = page ? parseInt(page as string) : DEFAULT_PAGE
				const sizeNumber = size ? parseInt(size as string) : DEFAULT_SIZE
				const findBooksByUserId = await this.booksRepository.findPaginateByUserId(
					{user_id, page:pageNumber, size:sizeNumber})
				return response.json(findBooksByUserId)
				// console.log('findbooksbyUserId:', findBooksByUserId)

			}catch(error){
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
