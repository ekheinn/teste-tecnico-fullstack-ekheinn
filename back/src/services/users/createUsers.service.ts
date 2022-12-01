import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/users.entity'
import AppError from '../../errors/appError'
import { IUserRequest } from '../../interfaces/user'
import { hash } from 'bcrypt'

const createUserService = async ({
	name,
	phone,
	email,
	password,
}: IUserRequest): Promise<Users> => {
	const userRepository = AppDataSource.getRepository(Users)

	if (!name) {
		throw new AppError(400, 'Name is a required field')
	} else if (!email) {
		throw new AppError(400, 'Email is a required field')
	} else if (!phone) {
		throw new AppError(400, 'Phone is a required field')
	} else if (!password) {
		throw new AppError(400, 'Password is a required field')
	}

	const userAlreadyExists = await userRepository.findOne({
		where: { email: email },
	})

	if (userAlreadyExists) {
		throw new AppError(401, 'User already exists')
	}

	const hashedPassword = await hash(password, 10)

	const user = userRepository.create({
		name,
		phone,
		email,
		password: hashedPassword,
	})

	await userRepository.save(user)

	return user
}

export default createUserService
