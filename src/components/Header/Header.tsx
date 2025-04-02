import { useTranslation } from 'react-i18next'

import { Button, Flex } from '@chakra-ui/react'

interface Props {
	onFilterOpen: () => void
}

const Header = ({ onFilterOpen }: Props) => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'filter'
	})

	return (
		<Flex
			as="header"
			padding={2}
		>
			<Button
				variant="solid"
				colorScheme="brand"
				marginLeft="auto"
				onClick={onFilterOpen}
			>
				{t('openFilterButton')}
			</Button>
		</Flex>
	)
}

export default Header
