/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				'black-98': '#FAFAFA',
				'black-100': '#ffffff',
				'black-12': '#1a181e',
				'black-50': '#808080',
				'black-60': '#999999',
				'black-90': '#e6e6e6',
				'black-95': '#f2f2f2',
				'black-30': '#4d4d4d',
				'black-85': '#d9d9d9',
				'hover-blue': '#0e4f82',
				'primary-blue': '#146eb4',
				green: '#17b31b',
				navbar: '#1e2640',
				'navbar-hover': 'rgba(255, 255, 255, 0.10)',
				'navbar-secondary': '#353c53',
			},
			fontFamily: {
				inter: 'var(--inter-font)',
			},
		},
	},
	plugins: [],
}
