const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { backgroundColor } = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				"logo": "url('/images/svg/healthykitchen101.svg')",
				"logo-w": "url('/images/svg/healthykitchen101-w.svg')",
				"logo-hr-w": "url('/images/svg/healthyrecipes101-w.svg')",
				"pros": "url('/icons/check.svg')",
				"cons": "url('/icons/minus.svg')",
				"topics": "url('/images/svg/topics.svg')",

			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
				  css: {
					color: '#4b5563',
					a: {
						color: theme('colors.cyan.700'),
					},
					div: {
						figure: {
							marginTop: '0px',
							marginBottom: '0px'
						}
					} 
				  },
				},
			  }),
			  
		},
		colors: {
			blue: colors.blue,
			red: colors.red,
			gray: colors.gray,
			white: colors.white,
			cyan: colors.cyan,
			green: colors.green,
			teal: colors.teal,
			sky: colors.sky,
			yellow: colors.yellow,
		},
	},

	variants: {
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
	],
}
