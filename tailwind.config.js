/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		animatedSettings: {
			animatedSpeed: 1000,
			heartBeatSpeed: 500,
			hingeSpeed: 2000,
			bounceInSpeed: 750,
			bounceOutSpeed: 750,
			animationDelaySpeed: 500,
			classes: ["fadeInUp"],
		},
		extend: {
			backgroundImage: {
				field: "url('../src/assets/images/stadium-football-sports.jpeg')",
			},
			spacing: {
				"3/4": "75%",
			},
			colors: {
				insta: "#E4405F",
				linkedin: "#0A66C2",
				twitter: "#1DA1F2",
				gmail: "#EA4335",
				footballHelper: "#71b7d6",
			},
		},
		fontFamily: {
			heading: ["Allerta Stencil", "sans-serif"],
			modal: ["Archivo Black", "sans-serif"],
		},
	},
	plugins: [require("tailwindcss-animatecss")],
};
