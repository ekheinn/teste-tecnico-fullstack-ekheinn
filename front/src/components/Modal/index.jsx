import { StyledModal } from './style'

function CreateModal({ children }) {
	return (
		<StyledModal>
			<div className="content-box">{children}</div>
		</StyledModal>
	)
}

export default CreateModal
