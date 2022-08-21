// /** @type {import('tailwindcss').Config} **/
module.exports = {
	content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
	theme: {
		extend: {},
	},

	plugins: [require("daisyui")],
	// daisyui: {
	// 	themes: ["emerald", "night"],
	// },
};