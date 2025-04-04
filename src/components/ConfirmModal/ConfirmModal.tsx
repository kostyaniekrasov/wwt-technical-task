import { useTranslation } from 'react-i18next'

import { Button, ModalFooter } from '@chakra-ui/react'

import { Modal } from '@components'

interface Props {
	isOpen: boolean
	onClose: () => void
	onApply: () => void
	useOldFilters: () => void
}

const ConfirmModal = ({ isOpen, onClose, onApply, useOldFilters }: Props) => {
	const { t } = useTranslation()
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={t('confirm.title')}
			headerMarginBottom={'120px'}
		>
			<ModalFooter
				display={'flex'}
				flex={1}
				flexDirection={{
					base: 'column',
					md: 'row'
				}}
				gap={{
					base: '16px',
					md: '32px'
				}}
				justifyContent={{ base: 'flex-end', md: 'center' }}
			>
				<Button
					size={{
						base: 'md',
						md: 'lg'
					}}
					w={{
						base: '100%',
						md: 280
					}}
					onClick={useOldFilters}
					variant={'outline'}
				>
					{t('confirm.cancel')}
				</Button>

				<Button
					size={{
						base: 'md',
						md: 'lg'
					}}
					w={{
						base: '100%',
						md: 280
					}}
					onClick={onApply}
					colorScheme="brand"
				>
					{t('confirm.apply')}
				</Button>
			</ModalFooter>
		</Modal>
	)
}

export default ConfirmModal
