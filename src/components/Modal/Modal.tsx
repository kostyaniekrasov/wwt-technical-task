import {
	Box,
	Modal as ChakraModal,
	Divider,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalProps
} from '@chakra-ui/react'

interface Props extends Omit<ModalProps, 'children'> {
	title: string
	body: React.ReactNode
	divider?: boolean
	headerMarginBottom?: string
}

const Modal = ({
	isOpen,
	onClose,
	title,
	body,
	divider,
	headerMarginBottom,
	size = 'xl'
}: Props) => {
	return (
		<ChakraModal
			isOpen={isOpen}
			onClose={onClose}
			size={size}
		>
			<ModalOverlay />

			<ModalContent>
				<ModalHeader
					display={'flex'}
					flexDirection={'column'}
					gap={divider ? '25px' : '0'}
					marginBottom={headerMarginBottom ?? '32px'}
				>
					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'space-between'}
					>
						<Box
							flex={1}
							textAlign={'center'}
						>
							{title}
						</Box>

						<ModalCloseButton position={'static'} />
					</Box>

					{divider && <Divider />}
				</ModalHeader>

				<ModalBody>{body}</ModalBody>
			</ModalContent>
		</ChakraModal>
	)
}

export default Modal
