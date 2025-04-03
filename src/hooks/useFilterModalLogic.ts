import { useCallback } from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { FilterItem, FilterType } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import useFilterStore from '@store/filterStore'

const useFilterModalLogic = () => {
	const { filters, tempFilters, setFilters, setTempFilters } = useFilterStore()

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

	const handleOptionsChange = useCallback(
		(filter: FilterItem, selectedOptions: string[]) => {
			const existingFilter = tempFilters.find(
				prevTempFilter => prevTempFilter.id === filter.id
			)

			if (
				existingFilter &&
				JSON.stringify(existingFilter.optionsIds) ===
					JSON.stringify(selectedOptions)
			) {
				return
			}

			const newFilters = existingFilter
				? tempFilters.map(prevTempFilter =>
						prevTempFilter.id === filter.id
							? { ...prevTempFilter, optionsIds: selectedOptions }
							: prevTempFilter
					)
				: [
						...tempFilters,
						{
							id: filter.id,
							type: FilterType.OPTION,
							optionsIds: selectedOptions
						}
					]

			setTempFilters(newFilters)
		},
		[tempFilters, setTempFilters]
	)

	const handleClearTempFilters = useCallback(() => {
		setTempFilters([])
	}, [setTempFilters])

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
		handleOptionsChange,
		handleClearTempFilters
	}
}

export default useFilterModalLogic
