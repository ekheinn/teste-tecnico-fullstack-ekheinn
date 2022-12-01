import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/users.entity'
// import { AppError } from '../../erros/appError'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import AppError from '../../errors/appError'
import { IUserLogin } from '../../interfaces/user'

const loginUserService = async ({ email, password }: IUserLogin) => {
	if (!email || !password) {
		throw new AppError(400, 'Email or password is missing')
	}

	const userRepository = AppDataSource.getRepository(Users)

	const user = await userRepository.findOne({ where: { email: email } })

	if (!user) {
		throw new AppError(404, 'Wrong email/password')
	}

	if (!bcrypt.compareSync(password, user.password)) {
		throw new AppError(404, 'Wrong email/password')
	}

	const token = jwt.sign({ id: user.id }, String(process.env.SECRET_KEY), {
		expiresIn: '1d',
	})

	return { token: token }
}

export default loginUserService
