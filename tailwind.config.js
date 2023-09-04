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
			backgroundImage: {
				"recent-one": "url('/giworks/equity-hero.webp')",
				"recent-two": "url('/giworks/travel-hero.webp')",
				"recent-three": "url('/giworks/wallet-hero.webp')",
				"recent-four": "url('/giworks/smarthome-hero.webp')",
				"recent-five": "url('/giworks/teachy-hero.webp')",
				"recent-six": "url('/giworks/workout-hero.webp')",
				"recent-seven": "url('/giworks/grocery-hero.webp')",
				"recent-eigth": "url('/giworks/medical-hero.webp')",
			},
			fontSize: {
				heading1: "77px",
				subHeading: "66px",
				subText: "20px",
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
				fifth: "#01b5ac",
			},
			color: {
				first: "rgb(22,24,28)",
				secondary: "rgb(255,83,0)",
			},
			gridTemplateColumns: {
				custom: "0.6fr 1fr",
				custom2: "0.2fr 1fr",
			},
			zIndex: {
				negetive: -1,
			},
		},
	},
	plugins: [],
};
