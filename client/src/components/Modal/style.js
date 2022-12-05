import styled from 'styled-components'

export const StyledModal = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgb(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;

	.content-box {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
