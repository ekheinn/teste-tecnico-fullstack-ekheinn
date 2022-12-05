import { Express } from 'express'
import {
	createContactController,
	deleteContactsController,
	listContactsController,
	updateContactsController,
} from '../controllers/contacts.controller'
import verifyOwnerMiddleware from '../middlewares/verifyOwner.middleware'
import verifyAuthMiddleware from '../middlewares/verifyUserAuth.middleware'

function contactRoutes(app: Express) {
	app.post('/contacts', verifyAuthMiddleware, createContactController)
	app.get('/contacts', verifyAuthMiddleware, listContactsController)
	app.delete(
		'/contacts/:contactId',
		verifyAuthMiddleware,
		verifyOwnerMiddleware,
		deleteContactsController,
	)
	app.patch(
		'/contacts/:contactId',
		verifyAuthMiddleware,
		verifyOwnerMiddleware,
		updateContactsController,
	)
}

export { contactRoutes }
