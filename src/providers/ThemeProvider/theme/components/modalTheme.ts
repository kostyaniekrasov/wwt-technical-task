import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
	overlay: {
		backdropFilter: 'blur(12.5px)'
	},

	dialogContainer: {
		padding: { base: '32px 0 0', md: '5rem' }
	},

	dialog: {
		borderRadius: 'md',
		margin: 0,
		p: { base: '20px', md: '32px' },
		minHeight: {
			base: '100%',
			md: 'auto'
		}
	},

	closeButton: {
		top: '1.1875rem',
		right: '1.4375rem',
		width: { base: '16px', md: '24px' },
		height: { base: '16px', md: '24px' },
		color: 'gray.500',
		borderRadius: 0,
		svg: {
			width: { base: '14px', md: '20px' },
			height: { base: '14px', md: '20px' }
		},
		_hover: {
			transform: 'scale(1.1)'
		}
	},

	header: {
		fontSize: { base: '1.0625rem', md: '2.5rem' },
		fontWeight: 'medium',
		textAlign: 'center',
		p: 0,
		color: 'gray.500'
	},

	body: {
		p: 0
	},

	footer: {
		p: 0
	}
})

const sizes = {
	md: {
		dialog: {
			maxW: '47.9375rem'
		}
	},
	lg: {
		dialog: {
			maxW: '54.875rem'
		}
	},
	xl: {
		dialog: {
			maxW: '1280px'
		}
	}
}

export const modalTheme = defineMultiStyleConfig({
	baseStyle,
	sizes,
	defaultProps: {
		size: 'md'
	}
})
