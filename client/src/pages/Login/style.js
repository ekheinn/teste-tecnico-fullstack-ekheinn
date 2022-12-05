import { Paper, theme } from '../../styles/styles'
import styled from 'styled-components'

export const PaperLogin = styled(Paper)`
	display: flex;
	flex-direction: column;
	gap: 15px;

	min-width: 200px;
	min-height: 340px;
	width: 15vw;
	height: 30vh;

	h1 {
		margin: 10px;
	}
	h2 {
		font-size: 15px;
		margin: 5px;
	}

	form {
		display: flex;
		flex-direction: column;
		text-align: start;
		list-style: none;

		label {
			font-size: 14px;
		}

		input {
			padding: 10px;
			background: #d1d1d1;
			background: ${theme.grey3};
			border: none;
			border-radius: 5px;
		}
		input:focus {
			background: ${theme.grey4};
			outline: 1px solid ${theme.grey3};
		}

		div {
			display: flex;
			flex-direction: column;
			text-align: center;
		}

		button {
			margin: 0 10px 15px 10px;
			padding: 10px;

			border: none;
			border-radius: 5px;
			background-color: ${theme.brand1};
			cursor: pointer;
		}
		button:hover {
			filter: brightness(0.8);
		}

		a {
			font-size: 12px;
			color: ${theme.grey1};
			text-decoration: none;
		}
		a:hover {
			text-decoration: underline;
		}

		.error {
			font-size: 12px;
			color: ${theme.error};
			width: fit-content;
			border-radius: 5px;
		}
	}
`
