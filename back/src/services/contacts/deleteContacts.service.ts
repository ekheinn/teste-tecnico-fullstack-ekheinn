import { AppDataSource } from '../../data-source'
import { Contacts } from '../../entities/contacts.entity'
import AppError from '../../errors/appError'

const deleteContactsService = async (id: any): Promise<void> => {
	const contactsRepository = AppDataSource.getRepository(Contacts)

	const contacts = await contactsRepository.findOne({ where: { id: id } })

	if (!contacts) {
		throw new AppError(404, 'Contacts does not exist')
	}

	await contactsRepository.delete({ id: id })
}

export default deleteContactsService
