import { useCallback } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import useFilterStore from '@store/filterStore'

const useFilterModalLogic = () => {
	const {
		filters,
		tempFilters,
		setFilters,
		setTempFilters,
		updateFilterOptions,
		clearTempFilters
	} = useFilterStore()

	const {
		isOpen: isFilterOpen,
		onOpen: onFilterOpen,
		onClose: onFilterClose
	} = useDisclosure()

	const {
		isOpen: isConfirmOpen,
		onOpen: onConfirmOpen,
		onClose: onConfirmClose
	} = useDisclosure()

	const handleApplyFilters = useCallback(
		(newFilters: SearchRequestFilter) => {
			setTempFilters(newFilters)
			onConfirmOpen()
		},
		[setTempFilters, onConfirmOpen]
	)

	const handleConfirmFilters = useCallback(() => {
		if (tempFilters) {
			setFilters(tempFilters)
		}
		onFilterClose()
		onConfirmClose()
	}, [setFilters, tempFilters, onConfirmClose, onFilterClose])

	const handleUseOldFilter = useCallback(() => {
		setTempFilters(filters)
		onFilterClose()
		onConfirmClose()
	}, [setTempFilters, onFilterClose, onConfirmClose, filters])

	return {
		filters,
		tempFilters,
		isFilterOpen,
		onFilterOpen,
		onFilterClose,
		isConfirmOpen,
		onConfirmOpen,
		onConfirmClose,
		handleApplyFilters,
		handleConfirmFilters,
		handleUseOldFilter,
		handleOptionsChange: updateFilterOptions,
		handleClearTempFilters: clearTempFilters
	}
}

export default useFilterModalLogic
