export interface IContactRequest {
	name: string
	email: string
	phone: string
	userId: number
}

export interface IContactUpdate {
	user: number
	contactId: number
	name: string
	email: string
	phone: string
}
