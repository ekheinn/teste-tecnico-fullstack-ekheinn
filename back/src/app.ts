import express, { NextFunction } from 'express'
import { appRoutes } from './routes'
import { Request, Response } from 'express'
import { errorMiddleware } from './middlewares/error.middleware'
import AppError from './errors/appError'
import 'express-async-errors'

require('dotenv').config()

const app = express()

app.use(express.json())

app.get('/test', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'Testing :^)',
	})
})

app.get('/error', (req: Request, res: Response) => {
	throw new AppError(400, 'Error working')
})

appRoutes(app)
app.use(errorMiddleware)

app.listen(process.env.PORT, () =>
	console.log(`Server running at localhost:${process.env.PORT}`),
)
