export interface IUserRequest {
	name: string
	email: string
	phone: number
	password: string
}

export interface IUserLogin {
	email: string
	password: string
}

export interface IUserUpdate {
	id: number
	name: string
	email: string
	phone: number
	password: string
}
