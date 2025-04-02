import {
	Box,
	Modal as ChakraModal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalProps
} from '@chakra-ui/react'

interface Props extends Omit<ModalProps, 'children'> {
	title: string
	body: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, body, size = 'xl' }: Props) => {
	return (
		<ChakraModal
			isOpen={isOpen}
			onClose={onClose}
			size={size}
		>
			<ModalOverlay />

			<ModalContent>
				<ModalHeader>
					<Box>{title}</Box>
				</ModalHeader>

				<ModalBody>{body}</ModalBody>
			</ModalContent>
		</ChakraModal>
	)
}

export default Modal
