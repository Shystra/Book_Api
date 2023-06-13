import express, { NextFunction, Request, Response, Application } from 'express'
import { UserRoutes } from './routes/user.routes'
import { DbConnection } from './dataBase'
import { BooksRoutes } from './routes/books.routes'

const app: Application = express()
const userRoutes = new UserRoutes().getRoutes()
const booksRoutes = new BooksRoutes().getRoutes()
const dataBase = new DbConnection()

app.use(express.json())
app.use('/user', userRoutes)

app.use('/books', booksRoutes)

app.use(express.urlencoded({ extended: true }))
// to format URL to leave more readable
dataBase.connect()
// conect to mongoDB

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if(err instanceof Error){
		return response.status(400).json({
			message: err.message
		})
	}
	return response.status(500).json({
		status: 500,
		message: 'Internal server error.',
	})
})

app.listen(3333, () => console.log('server is running'))


