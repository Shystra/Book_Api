import { NextFunction, Request, Response } from "express";
import { BooksRepository } from "../repositories/BooksRepository";



class BooksController {
	private booksRepository: BooksRepository
	constructor(){
		this.booksRepository = new BooksRepository
	}
	store(request: Request, response:Response, next:NextFunction){
		const { name, author, company, read, dateRead, description, rate } = request.body
		const { user_id } = request
		try {
			console.log(name, user_id)





		}catch (error){
			next(error)
		}



	}
}

export { BooksController }
