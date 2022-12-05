import { AppDataSource } from '../../data-source'
import AppError from '../../errors/appError'
import { IContactUpdate } from '../../interfaces/contacts'
import { Contacts } from '../../entities/contacts.entity'

const updateContactsService = async ({
	name,
	email,
	phone,
	contactId,
}: IContactUpdate) => {
	if (!name && !email && !phone) {
		throw new AppError(400, 'Nothing to update')
	}

	const contactsRepository = AppDataSource.getRepository(Contacts)
	const contact = await contactsRepository.findOne({ where: { id: contactId } })
	if (!contact) throw new AppError(404, 'Contact not found')

	contact.name = name
	contact.email = email
	contact.phone = phone

	const updatedContact = await contactsRepository.save(contact)

	return updatedContact
}

export { updateContactsService }
