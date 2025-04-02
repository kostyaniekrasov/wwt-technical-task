import { Box } from '@chakra-ui/react'

import { useFilterModalLogic } from '@/hooks'
import { Header } from '@components/Header'

export const App = () => {
	const { onFilterOpen } = useFilterModalLogic()
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<Header onFilterOpen={onFilterOpen} />
		</Box>
	)
}
