import { AppDataSource } from '../../data-source'
import AppError from '../../errors/appError'
import { Contacts } from '../../entities/contacts.entity'
import { IContactRequest } from '../../interfaces/contacts'
import { Users } from '../../entities/users.entity'

const createContactsService = async ({
	name,
	phone,
	email,
	userId,
}: IContactRequest): Promise<Contacts> => {
	const contactRepository = AppDataSource.getRepository(Contacts)

	if (!name) {
		throw new AppError(400, 'Name is a required field')
	} else if (!email) {
		throw new AppError(400, 'Email is a required field')
	} else if (!phone) {
		throw new AppError(400, 'Phone is a required field')
	}

	const contactAlreadyExists = await contactRepository.findOne({
		where: { email: email },
	})

	if (contactAlreadyExists) {
		throw new AppError(401, 'Contact already exists')
	}

	const userRepository = AppDataSource.getRepository(Users)
	const user = await userRepository.findOne({ where: { id: userId } })
	if (!user) throw new AppError(404, 'User not found')

	const contact = contactRepository.create({
		name,
		phone,
		email,
		user,
	})

	await contactRepository.save(contact)

	return contact
}

export default createContactsService
