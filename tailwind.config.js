/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				fredoka: ['Fredoka', 'sans-serif'],
				poppins: ['Poppins'],
				ligurino: ['ligurino', 'sans-serif'],
				sourcecode: ['source-code-pro', 'monospace']
			},
			animation: {
				float: 'float 6s ease-in-out infinite;',
				trans: 'trans 2s ease infinite;',
			},
			keyframes: {
				float: {
					'0%, 100%': {
						transform: 'translatey(0px);',
					},
					'50%': {
						transform: 'translatey(-20px);',
					},
				},
				trans: {
					'0%': {
						transform: 'translatey(0px);',
						opacity: 1,
					},
					'100%': {
						transform: 'translatey(2px);',
						opacity: 0,
					},
				},
			},
			colors: {
				bunker: {
					50: '#f3f3f4',
					100: '#e8e8e8',
					200: '#c5c5c6',
					300: '#a2a2a3',
					400: '#5c5c5f',
					500: '#16161a',
					600: '#141417',
					700: '#111114',
					800: '#0d0d10',
					900: '#0b0b0d',
				},
				purple: {
					50: '#f9f7fe',
					100: '#f2effe',
					200: '#dfd6fb',
					300: '#ccbdf9',
					400: '#a58cf5',
					500: '#7f5af0',
					600: '#7251d8',
					700: '#5f44b4',
					800: '#4c3690',
					900: '#3e2c76',
				},
				green: {
					50: '#f4fbf9',
					100: '#eaf8f2',
					200: '#caeddf',
					300: '#abe2cb',
					400: '#6bcca4',
					500: '#2cb67d',
					600: '#28a471',
					700: '#21895e',
					800: '#1a6d4b',
					900: '#16593d',
				},
				darkgray: {
					50: '#f8f8f9',
					100: '#f1f1f2',
					200: '#dcdddf',
					300: '#c7c8cb',
					400: '#9c9ea5',
					500: '#72757e',
					600: '#676971',
					700: '#56585f',
					800: '#44464c',
					900: '#38393e',
				},
				lightgray: {
					50: '#fafafb',
					100: '#f4f6f7',
					200: '#e4e8ec',
					300: '#d4d9e0',
					400: '#b4bdc9',
					500: '#94a1b2',
					600: '#8591a0',
					700: '#6f7986',
					800: '#59616b',
					900: '#494f57',
				},
			},
		},
	},
	plugins: [],
};
