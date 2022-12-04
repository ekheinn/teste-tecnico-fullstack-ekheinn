import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/styles'

export const PageError = () => {
	return (
		<Container>
			<h1>Algum erro ocorreu!</h1>
			<p>Verifique se o URL está correto e tente novamente.</p>
			<Link to="/">Volte a pagina inicial</Link>
		</Container>
	)
}
