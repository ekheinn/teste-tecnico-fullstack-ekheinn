import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/users.entity'
import AppError from '../../errors/appError'

const deleteUserService = async (id: number): Promise<void> => {
	const userRepository = AppDataSource.getRepository(Users)

	const user = await userRepository.findOne({ where: { id: id } })

	if (!user) {
		throw new AppError(404, 'User does not exist')
	}

	await userRepository.delete({ id: id })
}

export default deleteUserService
