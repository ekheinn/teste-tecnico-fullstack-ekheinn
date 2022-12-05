import { HeaderStyled } from './style'

export default function Header(props) {
	return (
		<HeaderStyled>
			<p>Teste Técnico - Fullstack</p>
			{props.children}
		</HeaderStyled>
	)
}
