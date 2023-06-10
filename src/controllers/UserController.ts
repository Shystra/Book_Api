import { NextFunction, Request, Response } from "express";
import { User } from "../modules";
import { hash } from "bcrypt";
import { UserRepository } from "../repositories/UserRepository";


class UserController {
	private userRepository: UserRepository
	constructor(){
		this.userRepository = new UserRepository()
	}




	async index(request: Request, response: Response, next: NextFunction){
		//buscar todos
		const { page, size } = request.query
		const DEFAULT_PAGE = 1
		const DEFAULT_SIZE = 10
		const pageNumber = page ? parseInt(page as string, 10) : DEFAULT_PAGE
		const pageSizeNumber = size ? parseInt(size as string, 10) : DEFAULT_SIZE
		// console.log('parametros', page, size)
		try{
			const result = await this.userRepository.findAll({
				page: pageNumber,
				size: pageSizeNumber
			})

			return response.json(result)


		} catch (error){
			next(error)
		}

	}






	show(request: Request, response: Response, next: NextFunction){
		//buscar apenas um
	}
	async store(request: Request, response: Response, next: NextFunction){
		// criar
		const { name, password, email } = request.body

		try{
			const findUser = await this.userRepository.findByEmail(email)
			if(findUser){
				throw new Error ('User already exists')
			}

			const hashPassword = await hash( password, 10 )
			const createUser = await this.userRepository.create({ name, password: hashPassword, email})

			return response.json( createUser )


		} catch (error){
			next(error)
			// console.log(error)
		}


	}
	update(request: Request, response: Response, next: NextFunction){

	}

}

export { UserController }
