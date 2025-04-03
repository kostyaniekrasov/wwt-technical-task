import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
	borderWidth: '2px',
	borderColor: 'gray.200',
	opacity: 1
})

export const dividerTheme = defineStyleConfig({
	baseStyle
})
