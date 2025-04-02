import { useCallback } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import useFilterStore from '@store/filterStore'

const useFilterModalLogic = () => {
	const { filters, tempFilters, setFilters, setTempFilters, resetTempFilters } =
		useFilterStore()

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
		setFilters(tempFilters)
		resetTempFilters()
		onFilterClose()
		onConfirmClose()
	}, [setFilters, tempFilters, onConfirmClose, onFilterClose, resetTempFilters])

	const handleUseOldFilter = useCallback(() => {
		resetTempFilters()
		onFilterClose()
		onConfirmClose()
	}, [resetTempFilters, onFilterClose, onConfirmClose])

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
		handleUseOldFilter
	}
}

export default useFilterModalLogic
