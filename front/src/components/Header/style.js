import styled from 'styled-components'
import { theme } from '../../styles/styles'

export const HeaderStyled = styled.header`
	overflow: hidden;
	background-color: ${theme.grey1};
	position: fixed;
	top: 0;
	width: 100%;
	max-height: 80px;

	color: #fff;
	a {
		text-decoration: none;
		color: #000;
		border-radius: 5px;
		padding: 5px 8px;
		background-color: ${theme.brand2};
	}
	a:hover {
		filter: brightness(0.8);
	}

	display: flex;
	justify-content: space-evenly;
	align-items: center;
`
