import { AppDataSource } from '../../data-source'
import { Contacts } from '../../entities/contacts.entity'
import AppError from '../../errors/appError'

const listUserContactsService = async (id: number) => {
	const contactsRepository = await AppDataSource.getRepository(Contacts)
		.createQueryBuilder('contacts')
		.leftJoinAndSelect('contacts.user', 'user')
		.getMany()

	const contacts = contactsRepository.filter(
		(contact) => contact.user?.id === id,
	)
	if (!contacts) {
		throw new AppError(404, 'No contacts found')
	}

	return contacts
}

export default listUserContactsService
