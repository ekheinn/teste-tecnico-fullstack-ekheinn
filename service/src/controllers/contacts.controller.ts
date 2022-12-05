import { instanceToPlain } from 'class-transformer'
import { Request, Response } from 'express'
import createContactsService from '../services/contacts/createContacts.service'
import jwt from 'jsonwebtoken'
import deleteContactsService from '../services/contacts/deleteContacts.service'
import listContactsService from '../services/contacts/getContacts.service'
import { updateContactsService } from '../services/contacts/updateContacts.service'

const createContactController = async (req: Request, res: Response) => {
	const { authorization } = req.headers
	const token = authorization!.split(' ')[1]
	const { id } = jwt.decode(token) as { id: number }
	const data = req.body
	data['userId'] = id
	const contact = await createContactsService(data)
	return res.status(201).json(instanceToPlain(contact))
}

const listContactsController = async (req: Request, res: Response) => {
	const contacts = await listContactsService()
	return res.json(instanceToPlain(contacts))
}

const deleteContactsController = async (req: Request, res: Response) => {
	const { contactId } = req.params
	await deleteContactsService(contactId)
	return res.status(204).json('')
}

const updateContactsController = async (req: Request, res: Response) => {
	const { authorization } = req.headers
	const token = authorization!.split(' ')[1]
	const { id } = jwt.decode(token) as { id: number }
	const data = req.body
	const { contactId } = req.params as { contactId: any }
	data['userId'] = id
	data['contactId'] = contactId

	const update = await updateContactsService(data)
	return res.status(200).json(update)
}

export {
	createContactController,
	listContactsController,
	deleteContactsController,
	updateContactsController,
}
