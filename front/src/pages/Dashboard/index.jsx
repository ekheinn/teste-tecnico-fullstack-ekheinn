import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/styles'
import '../../styles/body.css'
import { PaperDashboard } from './style'
import Header from '../../components/Header'
import CreateModal from '../../components/Modal'
import * as yup from 'yup'
import api from '../../services'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { SlClose } from 'react-icons/sl'
import { IoMdPersonAdd } from 'react-icons/io'
import { BiEdit } from 'react-icons/bi'

export default function Dashboard() {
	const token = localStorage.getItem('token')
	var decoded = jwt_decode(token)

	const [openModalAdd, setOpenModalAdd] = useState(false)
	const [openModalEdit, setOpenModalEdit] = useState(false)

	const [user, setUser] = useState({})
	const [contacts, setContacts] = useState([])

	const [nameEdit, setNameEdit] = useState('')
	const [emailEdit, setEmailEdit] = useState('')
	const [phoneEdit, setPhoneEdit] = useState('')

	useEffect(() => {
		api
			.get('/users', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				setUser(res.data.filter((user) => user.id === decoded.id)[0])
			})
			.catch((err) => {
				toast.error('Algo deu errado...')
			})

		api
			.get('/users/contacts', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				setContacts(res.data)
			})
			.catch((err) => {
				toast.error('Algo deu errado...')
			})
	}, [decoded.id, token, openModalAdd, contacts])

	const schema = yup.object().shape({
		name: yup.string().required('Obrigatorio*'),
		email: yup.string().required('Obrigatorio*'),
		phone: yup.string().required('Obrigatorio*'),
	})
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	})

	const schemaEdit = yup.object().shape({
		emailEdit: yup.string(),
		nameEdit: yup.string(),
		phoneEdit: yup.string(),
	})
	const {
		register: registerEdit,
		handleSubmit: handleSubmitEdit,
		formState: { errors: errorsEdit },
		reset: resetEdit,
	} = useForm({
		resolver: yupResolver(schemaEdit),
	})

	const onSubmit = (data) => {
		api
			.post(
				'/contacts',
				{
					name: data.name,
					email: data.email,
					phone: data.phone,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => {
				toast.success('Contato adicionado!', { autoClose: 2000 })
				setOpenModalAdd(false)
				reset()
			})
			.catch((err) => {
				console.log(err)
				if (err.response.data.message === 'Contact already exists') {
					toast.error('Contato já cadastrado.')
				} else {
					toast.error('Algo deu errado...')
				}
			})
	}

	const exclude = (data) => {
		api
			.delete(`/contacts/${data}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				toast.success('Contato excluido!', { autoClose: 2000 })
				setOpenModalAdd(false)
			})
			.catch((err) => {
				toast.error('Algo deu errado...')
			})
	}

	const [idEdit, setIdEdit] = useState('')

	const edit = (data) => {
		api
			.patch(
				`/contacts/${idEdit}`,
				{
					name: data.nameEdit,
					email: data.emailEdit,
					phone: data.phoneEdit,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => {
				toast.success('Contato editado!', { autoClose: 2000 })
				setOpenModalEdit(false)
				resetEdit()
			})
			.catch((err) => {
				console.log(err)
				toast.error('Algo deu errado...')
			})
	}

	return (
		<>
			{openModalAdd ? (
				<CreateModal>
					<PaperDashboard>
						<div className="btn">
							<h3>Adicionar contato</h3>
							<button onClick={() => setOpenModalAdd(false)} className="btnC">
								<SlClose size="2em" />
							</button>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<label>Nome completo</label>
							<input type="text" {...register('name')} />
							<p className="error">{errors.name?.message}</p>

							<label>Email</label>
							<input type="email" {...register('email')} />
							<p className="error">{errors.email?.message}</p>

							<label>Telefone</label>
							<input type="tel" {...register('phone')} />
							<p className="error">{errors.phone?.message}</p>
							<button type="submit">Adicionar</button>
						</form>
					</PaperDashboard>
				</CreateModal>
			) : (
				<></>
			)}
			{openModalEdit ? (
				<CreateModal>
					<PaperDashboard>
						<div className="btn">
							<h3>Editar contato</h3>
							<button onClick={() => setOpenModalEdit(false)} className="btnC">
								<SlClose size="2em" />
							</button>
						</div>
						<form onSubmit={handleSubmitEdit(edit)}>
							<label>Nome completo</label>
							<input
								type="text"
								defaultValue={nameEdit}
								{...registerEdit('nameEdit')}
							/>
							<p className="error">{errorsEdit.nameEdit?.message}</p>

							<label>Email</label>
							<input
								type="email"
								defaultValue={emailEdit}
								{...registerEdit('emailEdit')}
							/>
							<p className="error">{errors.emailEdit?.message}</p>

							<label>Telefone</label>
							<input
								type="tel"
								defaultValue={phoneEdit}
								{...registerEdit('phoneEdit')}
							/>
							<p className="error">{errors.phoneEdit?.message}</p>
							<button type="submit">Editar</button>
						</form>
					</PaperDashboard>
				</CreateModal>
			) : (
				<></>
			)}
			<Container>
				<Header>
					<Link to="/" onClick={() => localStorage.removeItem('token')}>
						Sair
					</Link>
				</Header>
				<PaperDashboard>
					<h1>Bem-vindo de volta {user.name}!</h1>
					<div className="navF">
						<h3>Seus contatos - </h3>
						<button onClick={() => setOpenModalAdd(true)} className="addC">
							Adicionar <IoMdPersonAdd />
						</button>
					</div>
					<ul>
						{contacts.length === 0 ? (
							<p>Sem contatos...</p>
						) : (
							contacts?.map((contact) => (
								<li key={contact.id}>
									<p>
										Nome: <span>{contact.name}</span>
									</p>
									<p>
										Email: <span>{contact.email}</span>
									</p>
									<p>
										Telefone: <span>{contact.phone}</span>
									</p>
									<button
										onClick={(ref) => exclude(ref.target.id)}
										className="btnEx"
										id={contact.id}
									>
										Excluir contato{'  '}
										<SlClose size="1em" />
									</button>
									<button
										onClick={(ref) => {
											setIdEdit(contact.id)
											setNameEdit(contact.name)
											setEmailEdit(contact.email)
											setPhoneEdit(contact.phone)
											setOpenModalEdit(true)
										}}
										className="btnEd"
										id={contact.id}
									>
										Editar contato{'  '}
										<BiEdit size="1em" />
									</button>
								</li>
							))
						)}
					</ul>
				</PaperDashboard>
				<ToastContainer />
			</Container>
		</>
	)
}
