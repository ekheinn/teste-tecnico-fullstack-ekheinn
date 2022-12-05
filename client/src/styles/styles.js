import styled from 'styled-components'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	height: 100vh;

	text-align: center;
	background-color: #f5f7fa;

	/* img {
		width: 700px;
		height: 200px;
		border: red 10px solid;
		border-radius: 10px;
	} */

	/* .buttonLink {
		background: white;
		color: black;
		padding: 10px;
		border: 1px solid #d1dce3;
		border-radius: 10px;
		text-decoration: none;
		color: #5d9cec;

		:hover {
			filter: brightness(0.8);
		}
	} */
`
export const theme = {
	brand1: '#12eaa6',
	brand2: '#0fbc85',

	grey0: '#0A0A0B',
	grey1: '#121214',
	grey2: '#868E96',
	grey3: '#E9ECEF',
	grey4: '#F8F9FA',

	error: '#ff0000',
	whiteFixed: '#fff',
	black: '#000',
}

export const Paper = styled.section`
	background-color: #fff;
	box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	padding: 25px;
`
