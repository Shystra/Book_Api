import express, { NextFunction, Request, Response, Application } from 'express'
import { UserRoutes } from './routes/user.routes'

const app: Application = express()
const userRoutes = new UserRoutes().getRoutes()

app.use(express.json())
app.use('/', userRoutes)

app.use(express.urlencoded({ extended: true }))
// para formatar url e deixar mais legivel


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


