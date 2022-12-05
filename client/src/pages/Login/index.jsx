import { Container } from '../../styles/styles'
import { PaperLogin } from './style'
import React from 'react'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import router from '../../routes'
import Header from '../../components/Header'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import api from '../../services'

export default function Login() {
	const schema = yup.object().shape({
		email: yup.string().required('Obrigatorio*'),
		password: yup.string().required('Obrigatorio*'),
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
			.post('/login', data)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				router.navigate('/dashboard')
				reset()
			})
			.catch((err) => {
				toast.error('Email e/ou senha errados')
			})
	}

	return (
		<Container>
			<Header>
				<Link to="/">Home</Link>
			</Header>
			<PaperLogin>
				<h1>Login</h1>
				<h2>Boas-vindas de volta!</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>Email</label>
					<input type="email" {...register('email', { required: true })} />
					<p className="error">{errors.email?.message}</p>

					<label>Senha</label>
					<input
						type="password"
						{...register('password', { required: true })}
					/>
					<p className="error">{errors.password?.message}</p>
					<div>
						<button type="submit">Entrar</button>

						<Link to="/register">Não tem conta? Registre-se</Link>
					</div>
				</form>
			</PaperLogin>
			<ToastContainer />
		</Container>
	)
}
