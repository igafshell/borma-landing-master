/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			sm: "500px",
			"max-lg": { max: "1023px" },
			"max-sm": { max: "500px" },
			"max-md": { max: "765px" },
		},
	},
	plugins: [],
};
