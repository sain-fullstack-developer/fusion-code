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
				roc: ["var(--font-rocgrotesk)"],
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
				radial: "radial-gradient(circle closest-side,#080820 50%,#010104)",
				radialTwo: "linear-gradient(45deg,#00f,#9f9fff)",
				linearText: "linear-gradient(45deg,#3b00ff,#c700ff)",
				btnBg: "linear-gradient(45deg,#0a02a6,#300279 81%,#33036c)",
				videoBg:
					"https://uploads-ssl.webflow.com/6478fa4e7e9547c7d81368ff/649d7617ba75cbd92761d297_abstract-cubic-shape-animation-loop-with-detailed-2022-05-09-23-05-33-utc (1)-poster-00001.jpg",
			},
			height: {
				pixel: "1px",
			},
			borderWidth: {
				pixel: "1px",
			},
			borderColor: {
				borderBlue: "rgb(22,2,152)",
			},
			backgroundColor: {
				primary: "rgba(0,0,0,1)",
				secondary: "rgba(5,5,46,.25)",
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
			boxShadow: {
				custom: "6px 6px 32px rgba(0,0,255,.6)",
			},
		},
	},
	plugins: [],
};
