import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	]
} satisfies Config