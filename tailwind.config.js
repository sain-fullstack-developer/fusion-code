/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				branden: "Branden",
			},
			screens: {
				sm: "640px",

				md: "768px",

				lg: "1024px",

				xl: "1280px",

				xxl: "1536px",
			},

			height: {
				pixel: "1px",
			},
			borderWidth: {
				pixel: "1px",
			},
			backgroundColor: {
				primary: "rgb(22,24,28)",
				secondary: "rgb(63,44,170)",
				third: "rgb(1,181,172)",
				forth: "rgb(255,83,0)",
			},
			color: {
				secondary: "rgb(255,83,0)",
			},
			gridTemplateColumns: {
				custom: "0.6fr 1fr",
			},
		},
	},
	plugins: [],
};
