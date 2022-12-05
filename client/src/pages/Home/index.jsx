import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/styles'
import '../../styles/body.css'
import { PaperHome } from './style'
import Header from '../../components/Header'

export default function Home() {
	return (
		<>
			<Header />
			<Container>
				<PaperHome>
					<h1>Bem-vindo!</h1>
					<img
						src="https://i.imgur.com/HpytXBG.png"
						alt="illustrations by Storyset"
					></img>
					<Link className="login" to="/login">
						Faça o login aqui
					</Link>
					<Link className="register" to="/register">
						Não tem conta? Registre-se
					</Link>
				</PaperHome>
			</Container>
		</>
	)
}
