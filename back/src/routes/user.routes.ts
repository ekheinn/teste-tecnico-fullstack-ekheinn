import { Express } from 'express'
import {
	createUserController,
	deleteUserController,
	listUserContactsController,
	listUsersController,
	loginUserController,
	updateUsersController,
} from '../controllers/users.controllers'
import verifyAuthMiddleware from '../middlewares/verifyUserAuth.middleware'

function userRoutes(app: Express) {
	app.post('/users', createUserController)
	app.post('/login', loginUserController)
	app.get('/users', verifyAuthMiddleware, listUsersController)
	app.delete('/users', verifyAuthMiddleware, deleteUserController)
	app.patch('/users', verifyAuthMiddleware, updateUsersController)
	app.get('/users/contacts', verifyAuthMiddleware, listUserContactsController)
}

export { userRoutes }
