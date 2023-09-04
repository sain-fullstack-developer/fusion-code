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
				"recent-one":
					"url('https://res.cloudinary.com/dlzukac2w/image/upload/v1693846654/equity-hero_zwjxwr.webp')",
				travel:
					"url('https://res.cloudinary.com/dlzukac2w/image/upload/v1693846674/travel-hero_qvqfsq.webp')",
				"recent-three":
					"url('https://res.cloudinary.com/dlzukac2w/image/upload/v1693846658/wallet-hero_yq17yz.webp')",
				"recent-four":
					"url('https://res.cloudinary.com/dlzukac2w/image/upload/v1693846665/smarthome-hero_yuqtzs.webp')",
				"recent-five":
					"url('https://res.cloudinary.com/dlzukac2w/image/upload/v1693846654/workout-hero_ejczuw.webp')",
				"recent-six":
					"url('https://res.cloudinary.com/dlzukac2w/image/upload/v1693846673/teachy-hero_fas9sm.webp')",
				"recent-seven":
					"url('https://res.cloudinary.com/dlzukac2w/image/upload/v1693846658/grocery-hero_yqesa1.webp')",
				"recent-eigth":
					"url('https://res.cloudinary.com/dlzukac2w/image/upload/v1693846666/medical-hero_aoe0yp.webp')",
				"platform-one": "url('/giworks/medical-hero.webp')",
				"platform-two": "url('/giworks/medical-hero.webp')",
				"platform-three": "url('/giworks/medical-hero.webp')",
				"p-ios": "url('/gitech/p-ios.png')",
				"p-android": "url('/gitech/p-android.png')",
				"p-web": "url('/gitech/p-web.png')",
				"p-tv": "url('/gitech/p-tv.png')",
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
