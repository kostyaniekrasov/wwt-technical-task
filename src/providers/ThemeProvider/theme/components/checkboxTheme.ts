import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const defaultControlStylesOnAction = {
	bg: 'white',
	borderColor: 'black'
}

const baseStyle = definePartsStyle({
	container: {
		_hover: {
			'.chakra-checkbox__control:not([data-checked])': {
				bg: 'gray.100'
			}
		}
	},
	control: {
		bg: 'white',
		borderWidth: '2px',
		borderColor: 'gray.500',
		borderRadius: '2px',

		_hover: {
			...defaultControlStylesOnAction
			// _checked: defaultControlStylesOnAction
		},
		_checked: {
			...defaultControlStylesOnAction,
			bg: 'gray.500'
		}
	},
	icon: {
		color: 'white',
		// svg has inline stroke-width param, so I don't see any other way to set this parameter.
		strokeWidth: '0.0625rem!important'
	},
	label: {
		color: 'gray.500',
		ml: { base: '0.2rem', md: '0.75rem' },
		fontSize: '1rem'
	}
})

const mdSize = definePartsStyle({
	control: {
		w: '20px',
		h: '20px'
	},
	icon: {
		fontSize: '0.75rem'
	}
})

export const checkboxTheme = defineMultiStyleConfig({
	baseStyle,
	defaultProps: {
		size: 'md'
	},
	sizes: {
		md: mdSize
	}
})
