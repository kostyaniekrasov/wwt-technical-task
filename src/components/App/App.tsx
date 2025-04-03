import { Box } from '@chakra-ui/react'

import { useFilterModalLogic } from '@/hooks'
import { ConfirmModal, FilterModal, Header } from '@components'

export const App = () => {
	const {
		onFilterOpen,
		isFilterOpen,
		onFilterClose,
		handleApplyFilters,
		tempFilters,
		handleOptionsChange,
		handleClearTempFilters,
		isConfirmOpen,
		onConfirmClose,
		handleConfirmFilters,
		handleUseOldFilter,
		filters
	} = useFilterModalLogic()

	console.log(filters)
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
				onOptionsChange={handleOptionsChange}
				onClearTempFilters={handleClearTempFilters}
			/>

			<ConfirmModal
				isOpen={isConfirmOpen}
				onClose={onConfirmClose}
				onApply={handleConfirmFilters}
				useOldFilters={handleUseOldFilter}
			/>
		</Box>
	)
}
