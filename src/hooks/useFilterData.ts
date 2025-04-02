import { useQuery } from '@tanstack/react-query'

import { FilterItem } from '@api/types/Filter'

const useFilterData = () => {
	return useQuery<FilterItem[]>({
		queryKey: ['filterData'],
		queryFn: async () => {
			const response = await fetch('/temp/filterData.json')
			if (!response.ok) {
				throw new Error('Failed to fetch filter data')
			}
			const data = await response.json()
			return data.filterItems as FilterItem[]
		},
		staleTime: 1000 * 60 * 5,
		retry: 1
	})
}

export default useFilterData
