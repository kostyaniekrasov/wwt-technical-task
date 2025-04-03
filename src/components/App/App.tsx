import { Box } from '@chakra-ui/react'

import { useFilterModalLogic } from '@/hooks'
import { FilterModal, Header } from '@components'

export const App = () => {
	const {
		onFilterOpen,
		isFilterOpen,
		onFilterClose,
		handleApplyFilters,
		tempFilters
	} = useFilterModalLogic()
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<Header onFilterOpen={onFilterOpen} />

			<FilterModal
				isOpen={isFilterOpen}
				onClose={onFilterClose}
				onApply={handleApplyFilters}
				tempFilters={tempFilters}
				onClearTempFilters={() => {}}
				onOptionsChange={() => {}}
			/>
		</Box>
	)
}
