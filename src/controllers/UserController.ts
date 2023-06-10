import { NextFunction, Request, Response } from "express";
import { User } from "../modules";

class UserController {
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
			const findUser = await User.findOne({ email })
			if(findUser){
				throw new Error ('User already exists')
			}


			const createUser = await User.create({ name, password, email })
			return response.json({ createUser })


		} catch (error){
			next(error)
			// console.log(error)
		}


	}
	update(request: Request, response: Response, next: NextFunction){

	}

}

export { UserController }
