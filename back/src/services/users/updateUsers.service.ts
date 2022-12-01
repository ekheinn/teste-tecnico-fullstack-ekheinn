import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/users.entity'
import { hash } from 'bcrypt'
import { IUserUpdate } from '../../interfaces/user'
import AppError from '../../errors/appError'

const updateUsersService = async ({
	id,
	name,
	email,
	phone,
	password,
}: IUserUpdate) => {
	if (!name && !email && !phone && !password) {
		throw new AppError(400, 'Nothing to update')
	}

	let newPassword = password
	if (password) {
		newPassword = await hash(password, 10)
	}

	const usersRepository = AppDataSource.getRepository(Users)

	const userDataUpdate = {
		id: id,
		name,
		email,
		phone,
		password: newPassword,
	}

	const updatedUser = await usersRepository.save(userDataUpdate)

	return updatedUser
}

export { updateUsersService }
