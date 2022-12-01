import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/styles'
import '../../styles/body.css'
import { PaperDashboard } from './style'
import Header from '../../components/Header'

export default function Dashboard() {
	const contacts = [
		{ name: 'contato1' },
		{ name: 'contato2' },
		{ name: 'contato3' },
	]
	return (
		<Container>
			<Header>
				<Link to="/">Home</Link>
			</Header>
			<Link to="/">Voltar</Link>
			<PaperDashboard>
				<h1>Bem-vindo!</h1>

				<ul>
					{contacts?.map((contact) => (
						<p>{contact.name}</p>
					))}
				</ul>
			</PaperDashboard>
		</Container>
	)
}
