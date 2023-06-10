import { NextFunction, Request, Response } from "express";
import { User } from "../modules";
import { hash } from "bcrypt";
import { UserRepository } from "../repositories/UserRepository";


class UserController {
	private userRepository: UserRepository
	constructor(){
		this.userRepository = new UserRepository()
	}




	index(request: Request, response: Response, next: NextFunction){
		//buscar todos
		try{


		} catch (error){
			console.log(error)
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
