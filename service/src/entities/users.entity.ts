import {
	Entity,
	Column,
	CreateDateColumn,
	PrimaryGeneratedColumn,
	OneToOne,
	JoinColumn,
	OneToMany,
} from 'typeorm'

import { Exclude } from 'class-transformer'
import { Contacts } from './contacts.entity'

@Entity()
export class Users {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ unique: true })
	email: string

	@Column()
	@Exclude({ toPlainOnly: true })
	password: string

	@Column()
	phone: string

	@CreateDateColumn({ name: 'createdAt' })
	createdAt: Date

	@OneToMany((type) => Contacts, (contacts) => contacts.user, {
		onDelete: 'SET NULL',
	})
	contacts: Contacts[]
}
