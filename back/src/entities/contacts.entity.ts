import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Users } from './users.entity'

@Entity()
export class Contacts {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ unique: true })
	email: string

	@Column()
	phone: string

	@ManyToOne((type) => Users, (user) => user.contacts, {
		onDelete: 'SET NULL',
	})
	user: Users
}
