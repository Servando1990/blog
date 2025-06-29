import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				// Main background/surface colors - Cream to Charcoal
				surface: {
					50: '#FDFBD4',   // Your warm cream - light backgrounds
					100: '#F8F6C8',  // Slightly darker cream
					200: '#F0EDB8',  // Muted cream
					300: '#E8E4A8',  // Mid cream
					400: '#D8D298',  // Darker cream
					500: '#A8A378',  // Neutral mid-tone
					600: '#787058',  // Warm gray
					700: '#484438',  // Dark warm gray
					800: '#2E2A26',  // Almost charcoal
					900: '#222326',  // Your charcoal - dark backgrounds
				},
				// Text colors - Blue-gray for readability
				text: {
					50: '#F8F9FA',   // Pure white text
					100: '#E9ECEF',  // Very light text
					200: '#DEE2E6',  // Light text
					300: '#CED4DA',  // Muted light text
					400: '#ADB5BD',  // Mid-tone text
					500: '#6A89A7',  // Your blue-gray - main text
					600: '#5A7B96',  // Darker blue-gray
					700: '#4A6B85',  // Dark blue-gray
					800: '#3A5B74',  // Very dark blue-gray
					900: '#2A4B63',  // Darkest blue-gray
				},
				// Accent color - Green for tags, buttons, highlights
				accent: {
					50: '#F0F7ED',   // Very light green
					100: '#E1EFDB',  // Light green
					200: '#D2E7C9',  // Pale green
					300: '#C3DFB7',  // Muted green
					400: '#A7D193',  // Light accent green
					500: '#84B067',  // Your sage green - main accent
					600: '#75A05B',  // Darker sage
					700: '#66904F',  // Dark sage
					800: '#578043',  // Very dark sage
					900: '#487037',  // Darkest sage
				},
				// Keep primary as alias for accent (for existing components)
				primary: {
					50: '#F0F7ED',
					100: '#E1EFDB',
					200: '#D2E7C9',
					300: '#C3DFB7',
					400: '#A7D193',
					500: '#84B067',  // Your sage green
					600: '#75A05B',
					700: '#66904F',
					800: '#578043',
					900: '#487037',
				}
			},
			fontFamily: {
				sans: ['Charter', 'Bitstream Charter', 'Sitka Text', 'Cambria', 'serif'],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	]
} satisfies Config