/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'design-red': '#EA5454',
				'design-cyan': '#44D3D2',
				'design-orange': '#FCAE4A',
				'design-blue': '#549EF2',
				'design-black': '#4D4F62 ',
			},
			fontFamily: {
				poppins: ['Poppins', 'serif'],
			},
			boxShadow: {},
		},
	},
	plugins: [],
};
