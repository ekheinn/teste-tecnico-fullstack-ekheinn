import { Paper, theme } from '../../styles/styles'
import styled from 'styled-components'

export const PaperHome = styled(Paper)`
	display: flex;
	flex-direction: column;
	gap: 2vw;

	.login {
		background: ${theme.brand1};
		color: black;
		padding: 10px;
		border: 1px solid #d1dce3;
		border-radius: 10px;
		text-decoration: none;

		:hover {
			filter: brightness(0.8);
		}
	}
	.register {
		background: white;
		color: ${theme.grey1};
		padding: 10px;
		text-decoration: none;

		:hover {
			color: #000;
			text-decoration: underline;
		}
	}
`
