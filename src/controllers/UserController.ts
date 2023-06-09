import { NextFunction, Request, Response } from "express";

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
	store(request: Request, response: Response, next: NextFunction){
		// criar
		const { name, password, email } = request.body

		try{


		} catch (error){
			return response.json({ error: 'ERROR'})
			// console.log(error)
		}


	}
	update(request: Request, response: Response, next: NextFunction){

	}

}

export { UserController }
