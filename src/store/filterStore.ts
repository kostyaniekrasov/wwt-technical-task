import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

interface FilterState {
	filters: SearchRequestFilter
	tempFilters: SearchRequestFilter
	setFilters: (filters: SearchRequestFilter) => void
	setTempFilters: (filters: SearchRequestFilter) => void
	resetTempFilters: () => void
}

const useFilterStore = create<FilterState>()(
	persist(
		set => ({
			filters: [],
			tempFilters: [],
			setFilters: filters => set({ filters }),
			setTempFilters: filters => set({ tempFilters: filters }),
			resetTempFilters: () => set({ tempFilters: [] })
		}),
		{ name: 'filter-store' }
	)
)

export default useFilterStore
