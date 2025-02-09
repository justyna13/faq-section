import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'work-sans': ['var(--work-sans)', ...fontFamily.sans],
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				pink: 'var(--pink)',
				purple: 'var(--purple)',
			},
		},
	},
	plugins: [],
} satisfies Config;
