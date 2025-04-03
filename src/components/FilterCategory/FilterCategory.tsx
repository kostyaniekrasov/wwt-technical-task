import {
	Box,
	Checkbox,
	CheckboxGroup,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Text,
	Tooltip,
	VStack
} from '@chakra-ui/react'

import { FilterItem } from '@api/types/Filter'

interface Props {
	filter: FilterItem
	optionsChange: (filter: FilterItem, selectedOptions: string[]) => void
	selectedOptions: string[]
}

const FilterCaterory = ({ filter, optionsChange, selectedOptions }: Props) => {
	return (
		<FormControl
			key={filter.id}
			pb={'32px'}
			borderBottom={'32px'}
			borderColor={'gray.200'}
		>
			<Tooltip
				label={filter.description}
				placement="right"
				openDelay={500}
				closeDelay={100}
			>
				<FormLabel
					mb={'24px'}
					width={'max-content'}
				>
					<Text
						fontSize={{
							base: '1.125rem',
							md: '1.5rem'
						}}
						color={'gray.500'}
						fontWeight={500}
					>
						{filter.name}
					</Text>
				</FormLabel>
			</Tooltip>

			<CheckboxGroup
				value={selectedOptions}
				onChange={value => optionsChange(filter, value as string[])}
			>
				<VStack align={'start'}>
					<Grid
						templateColumns={{
							base: 'repeat(4, 72px)',
							lg: 'repeat(12, 72px)'
						}}
						gap={{
							base: '16px',
							lg: '32px'
						}}
					>
						{filter.options.map(option => (
							<GridItem
								key={option.id}
								colSpan={{
									base: 2,
									lg:
										filter.options.length > 4 || filter.options.length === 3
											? 4
											: 6
								}}
							>
								<Tooltip
									label={option.description}
									placement="right"
									openDelay={500}
									closeDelay={100}
								>
									<Box width={'max-content'}>
										<Checkbox value={option.id}>{option.name}</Checkbox>
									</Box>
								</Tooltip>
							</GridItem>
						))}
					</Grid>
				</VStack>
			</CheckboxGroup>
		</FormControl>
	)
}

export default FilterCaterory
