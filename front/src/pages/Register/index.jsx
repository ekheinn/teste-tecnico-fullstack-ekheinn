import { Container } from '../../styles/styles'
import { PaperRegister } from './style'
import React from 'react'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import router from '../../routes'
import Header from '../../components/Header'
import api from '../../services'
import { ToastContainer, toast } from 'react-toastify'

export default function Register() {
	const schema = yup.object().shape({
		name: yup.string().required('Obrigatorio*'),
		email: yup.string().required('Obrigatorio*'),
		phone: yup.string().required('Obrigatorio*'),
		password: yup.string().required('Obrigatorio*'),
		confPass: yup
			.string()
			.required('Obrigatorio*')
			.oneOf([yup.ref('password')], 'Senha não corresponde*'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data) => {
		api
			.post('/users', data)
			.then((res) => {
				toast.success('Registrado com sucesso!', { autoClose: 2000 })
				setTimeout(() => {
					router.navigate('/login')
				}, 3000)
				reset()
			})
			.catch((err) => {
				if (err.response.data.message === 'User already exists') {
					toast.error('Email já cadastrado.')
				} else {
					toast.error('Algo deu errado...')
				}
			})
	}

	return (
		<Container>
			<Header>
				<Link to="/">Home</Link>
			</Header>
			<PaperRegister>
				<h1>Registro</h1>
				<h2>Crie uma conta</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>Nome completo</label>
					<input type="text" {...register('name', { required: true })} />
					<p className="error">{errors.name?.message}</p>

					<label>Email</label>
					<input type="email" {...register('email', { required: true })} />
					<p className="error">{errors.email?.message}</p>

					<label>Telefone</label>
					<input type="tel" {...register('phone', { required: true })} />
					<p className="error">{errors.phone?.message}</p>

					<label>Senha</label>
					<input
						type="password"
						{...register('password', { required: true })}
					/>
					<p className="error">{errors.password?.message}</p>

					<label>Confirme sua senha</label>
					<input
						type="password"
						{...register('confPass', { required: true })}
					/>
					<p className="error">{errors.confPass?.message}</p>

					<div>
						<button type="submit">Registrar</button>

						<Link to="/login">Já tem conta? Faça o login</Link>
					</div>
				</form>
			</PaperRegister>
			<ToastContainer />
		</Container>
	)
}
