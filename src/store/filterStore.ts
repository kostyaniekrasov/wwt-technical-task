import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { FilterItem, FilterType } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

interface FilterState {
	filters: SearchRequestFilter
	tempFilters: SearchRequestFilter
	setFilters: (filters: SearchRequestFilter) => void
	setTempFilters: (filters: SearchRequestFilter) => void
	updateFilterOptions: (filter: FilterItem, selectedOptions: string[]) => void
	clearTempFilters: () => void
}

const useFilterStore = create<FilterState>()(
	persist(
		(set, get) => ({
			filters: [],
			tempFilters: [],
			setFilters: filters => set({ filters }),
			setTempFilters: filters => set({ tempFilters: filters }),
			updateFilterOptions: (filter, selectedOptions) => {
				const tempFilters = get().tempFilters
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

				let newFilters

				if (selectedOptions.length === 0) {
					newFilters = tempFilters.filter(
						prevTempFilter => prevTempFilter.id !== filter.id
					)
				} else if (existingFilter) {
					newFilters = tempFilters.map(prevTempFilter =>
						prevTempFilter.id === filter.id
							? { ...prevTempFilter, optionsIds: selectedOptions }
							: prevTempFilter
					)
				} else {
					newFilters = [
						...tempFilters,
						{
							id: filter.id,
							type: FilterType.OPTION,
							optionsIds: selectedOptions
						}
					]
				}

				set({ tempFilters: newFilters })
			},
			clearTempFilters: () => set({ tempFilters: [] })
		}),
		{ name: 'filter-store' }
	)
)

export default useFilterStore
