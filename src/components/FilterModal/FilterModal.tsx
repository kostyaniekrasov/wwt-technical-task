import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Link, ModalBody, ModalFooter, VStack } from '@chakra-ui/react'

import { FilterItem } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import { useFilterData } from '@/hooks'
import { FilterCategory, Modal } from '@components'

interface Props {
	isOpen: boolean
	onClose: () => void
	onApply: (filters: SearchRequestFilter) => void
	tempFilters: SearchRequestFilter
	onOptionsChange: (filters: FilterItem, selectedOptions: string[]) => void
	onClearTempFilters: () => void
}

const FilterModal = ({
	isOpen,
	onClose,
	onApply,
	tempFilters,
	onOptionsChange,
	onClearTempFilters
}: Props) => {
	const { t } = useTranslation()
	const { data: filterData, isLoading } = useFilterData(isOpen)

	const handleApplyFilters = useCallback(() => {
		onApply(tempFilters)
	}, [onApply, tempFilters])

	const handleClearAll = useCallback(() => {
		onClearTempFilters()
	}, [onClearTempFilters])

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={t('filter.title')}
			divider
		>
			<ModalBody>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<VStack>
						{filterData?.map(filter => {
							const selectedOptions =
								tempFilters.find(tempFilter => tempFilter.id === filter.id)
									?.optionsIds || []
							return (
								<FilterCategory
									key={filter.id}
									filter={filter}
									optionsChange={onOptionsChange}
									selectedOptions={selectedOptions}
								/>
							)
						})}
					</VStack>
				)}
			</ModalBody>

			<ModalFooter
				display={'flex'}
				flexDirection={{
					base: 'column',
					md: 'row'
				}}
				gap={{
					base: 2,
					md: 0
				}}
				alignItems="center"
				justifyContent="center"
				position="relative"
			>
				<Button
					variant="solid"
					size={{
						base: 'md',
						md: 'lg'
					}}
					w={{
						base: '100%',
						md: 184
					}}
					colorScheme="brand"
					onClick={handleApplyFilters}
				>
					{t('filter.apply')}
				</Button>

				<Link
					position={{ md: 'absolute' }}
					right={0}
					onClick={handleClearAll}
				>
					{t('filter.clearAllLink')}
				</Link>
			</ModalFooter>
		</Modal>
	)
}

export default FilterModal
