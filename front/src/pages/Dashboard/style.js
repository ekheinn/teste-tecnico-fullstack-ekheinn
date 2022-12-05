import { Paper, theme } from '../../styles/styles'
import styled from 'styled-components'

export const PaperDashboard = styled(Paper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	font-size: 2vh;

	.config {
		border: none;
		width: fit-content;
		padding: 5px;
		border-radius: 5px;
		background-color: ${theme.grey3};
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.navF {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.addC {
		border: none;
		width: fit-content;
		padding: 5px;
		border-radius: 10px;
		background-color: ${theme.brand1};
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}
	button:hover {
		filter: brightness(0.8);
	}

	.btn {
		display: flex;
		justify-content: flex-end;
		border: none;
		background: none;
	}
	.btnC {
		border: none;
		background: none;
		cursor: pointer;
	}
	.btnC:hover {
		color: #cc0000;
	}

	.btnEx {
		border: none;
		background: none;
		cursor: pointer;
	}
	.btnEx:hover {
		color: #cc0000;
	}
	.btnEd {
		border: none;
		background: none;
		cursor: pointer;
	}
	.btnEd:hover {
		color: #eded84;
	}

	h1 {
		margin: 10px;
	}
	h3 {
		/* font-size: 15px; */
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
		}

		.error {
			font-size: 12px;
			color: ${theme.error};
			width: fit-content;
			border-radius: 5px;
		}
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		li {
			font-size: 1.8vh;
			padding: 5px;
			margin: 10px;
			border: 2px solid ${theme.grey3};
			border-radius: 10px;
			background: ${theme.grey4};
			p {
				font-weight: 600;
				display: flex;
				justify-content: space-between;
				margin: 0;
				padding: 2px;
			}
		}
		span {
			font-weight: 100;
		}
	}
`
