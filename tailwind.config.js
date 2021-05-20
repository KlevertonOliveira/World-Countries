module.exports = {
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				darkBlue: 'hsl(209, 23%, 22%)', // (Dark Mode Elements)
				veryDarkBlue: 'hsl(207, 26%, 17%)', // (Dark Mode Background)
				veryDarkBlue: 'hsl(200, 15%, 8%)', // (Light Mode Text)
				darkGray: 'hsl(0, 0%, 52%)', // (Light Mode Input)
				veryLightGray: 'hsl(0, 0%, 98%)', // (Light Mode Background)
				whiteMain: 'hsl(0, 0%, 100%)', //(Dark Mode Text & Light Mode Elements)
			},
			fontFamily: {
				sans: ['Nunito Sans', 'sans-serif'],
				// 300, 600, 800
				//light, semibold, extrabold
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
