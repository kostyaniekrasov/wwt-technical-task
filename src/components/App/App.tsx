import { Box, ModalBody } from '@chakra-ui/react'

import { useFilterModalLogic } from '@/hooks'
import { Header, Modal } from '@components'

export const App = () => {
	const { onFilterOpen } = useFilterModalLogic()
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<Header onFilterOpen={onFilterOpen} />
			<Modal
				isOpen={true}
				onClose={() => {}}
				title="Test"
				divider
			>
				<ModalBody></ModalBody>
			</Modal>
		</Box>
	)
}
