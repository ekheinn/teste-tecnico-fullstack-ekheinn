import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import AppError from '../errors/appError'

const verifyAuthMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { authorization } = req.headers
	const token = authorization?.split(' ')[1]

	if (!token) throw new AppError(401, 'missing authorization')

	try {
		const verify: any = jwt.verify(token, process.env.SECRET_KEY!)
		if (verify) next()
	} catch {
		throw new AppError(401, 'Invalid token')
	}
}

export default verifyAuthMiddleware
