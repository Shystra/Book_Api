import { Router } from "express";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { BooksController } from "../controllers/BooksController";

class BooksRoutes {
	private router: Router
	private authmiddleware: AuthMiddleware
	private booksController: BooksController
	constructor(){
		this.router = Router ()
		this.authmiddleware = new AuthMiddleware()
		this.booksController = new BooksController()
	}

	getRoutes():Router{
		this.router.post(
			'/',
		this.authmiddleware.auth.bind(this.authmiddleware),
		this.booksController.store.bind(this.booksController)
		)

		this.router.get('/',
		this.authmiddleware.auth.bind(this.authmiddleware),
		this.booksController.index.bind(this.booksController),
		)

		return this.router
	}


}












export { BooksRoutes }
