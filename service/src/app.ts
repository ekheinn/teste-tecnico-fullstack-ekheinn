import express, { NextFunction } from 'express'
import { appRoutes } from './routes'
import { Request, Response } from 'express'
import { errorMiddleware } from './middlewares/error.middleware'
import AppError from './errors/appError'
import 'express-async-errors'
import cors from 'cors'

require('dotenv').config()

const app = express()

app.use(express.json())

app.use(cors())
const corsOptions = {
	origin: [
		'https://client-fullstack-test.vercel.app',
		'https://client-fullstack-test-ekheinn.vercel.app/',
		'http://localhost:3000',
	],
	default: 'https://client-fullstack-test-enl7jiny8-ekheinn.vercel.app',
	credentials: true,
	optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

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

app.listen(3001, () => console.log(`Server running at localhost:3001`))
