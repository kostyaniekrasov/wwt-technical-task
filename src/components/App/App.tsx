import { Box, Text } from '@chakra-ui/react'

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

	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<Header onFilterOpen={onFilterOpen} />

			<Box p={4}>
				{filters.map(filter => (
					<Box
						key={filter.id}
						display={'flex'}
						flexDirection={'column'}
						mb={4}
					>
						<Text
							fontSize={'xl'}
							fontWeight={'bold'}
						>
							{filter.id}
						</Text>

						{filter.optionsIds.map(option => (
							<Text
								key={option}
								fontSize={'lg'}
								display={'flex'}
								flexDirection={'column'}
							>
								{option}
							</Text>
						))}
					</Box>
				))}
			</Box>

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
