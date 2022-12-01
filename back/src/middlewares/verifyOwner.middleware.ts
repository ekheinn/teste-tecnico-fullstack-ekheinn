import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import AppError from '../errors/appError'
import { AppDataSource } from '../data-source'
import { Users } from '../entities/users.entity'
import { Contacts } from '../entities/contacts.entity'

const verifyOwnerMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { authorization } = req.headers
	const token = authorization?.split(' ')[1]
	if (!token) throw new AppError(401, 'missing authorization')
	const { id } = jwt.decode(token) as { id: any }

	const usersRepository = AppDataSource.getRepository(Users)
	const contactsRepository = AppDataSource.getRepository(Contacts)

	const { contactId } = req.params as { contactId: any }
	const contact = await contactsRepository.findOne({
		where: { id: contactId },
		relations: {
			user: true,
		},
	})

	const user = await usersRepository.findOne({ where: { id: id } })

	if (user?.id !== contact?.user.id) {
		throw new AppError(401, 'Unauthorized')
	}
	next()
}

export default verifyOwnerMiddleware
