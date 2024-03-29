/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		keyframes: {
			spin: {
				to: { transform: "rotate(360deg)" },
			},
		},
		animation: {
			"spin-slow": "spin 1s ease-out infinite",
		},
	},
	plugins: [],
};
