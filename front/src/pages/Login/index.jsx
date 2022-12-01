import { Container } from '../../styles/styles'
import { PaperLogin } from './style'
import React from 'react'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import router from '../../routes'
import Header from '../../components/Header'
// import { useState } from 'react'
// import axios from 'axios'

export default function Login() {
	const schema = yup.object().shape({
		email: yup.string().required('Obrigatorio*'),
		password: yup.string().required('Obrigatorio*'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	// const [days, setDays] = useState({ 1: 0, 15: 0, 30: 0, 90: 0 })
	// const [apiError, setApiError] = useState(false)

	const onSubmit = (data) => {
		console.log(data)
		router.navigate('/dashboard')
	}

	// const onSubmit = (data) => {
	// 	axios
	// 		.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', data)
	// 		.then((res) => {
	// 			console.log(res)
	// 			// setDays(res.data)
	// 			// setApiError(false)
	// 		})
	// 		.catch((err) => {
	// 			console.log(err)
	// 			// setDays({ 1: 0, 15: 0, 30: 0, 90: 0 })
	// 			// setApiError(true)
	// 		})
	// }
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
		</Container>
	)
}
