import createUserService from '../services/users/createUsers.service'
import loginUserService from '../services/users/loginUsers.service'
import listUsersService from '../services/users/getUsers.service'
import deleteUserService from '../services/users/deleteUser.service'
import { updateUsersService } from '../services/users/updateUsers.service'
import { instanceToPlain } from 'class-transformer'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import listContactsService from '../services/contacts/getContacts.service'
import listUserContactsService from '../services/users/listUserContacts.service'

const createUserController = async (req: Request, res: Response) => {
	const data = req.body
	const user = await createUserService(data)
	return res.status(201).json(instanceToPlain(user))
}

const loginUserController = async (req: Request, res: Response) => {
	const data = req.body
	const token = await loginUserService(data)
	return res.status(200).json(token)
}

const listUsersController = async (req: Request, res: Response) => {
	const user = await listUsersService()
	return res.json(instanceToPlain(user))
}

const deleteUserController = async (req: Request, res: Response) => {
	const { authorization } = req.headers
	const token = authorization!.split(' ')[1]
	const { id } = jwt.decode(token) as { id: number }
	await deleteUserService(id)
	return res.status(204).json('')
}

const updateUsersController = async (req: Request, res: Response) => {
	const { authorization } = req.headers
	const token = authorization!.split(' ')[1]
	const { id } = jwt.decode(token) as { id: number }
	const { name, email, phone, password } = req.body
	const update = await updateUsersService({
		id,
		name,
		email,
		phone,
		password,
	})
	return res.status(200).json(update)
}

const listUserContactsController = async (req: Request, res: Response) => {
	const { authorization } = req.headers
	const token = authorization!.split(' ')[1]
	const { id } = jwt.decode(token) as { id: any }
	const update = await listUserContactsService(id)
	return res.status(200).json(update)
}

export {
	createUserController,
	loginUserController,
	listUsersController,
	deleteUserController,
	updateUsersController,
	listUserContactsController,
}
