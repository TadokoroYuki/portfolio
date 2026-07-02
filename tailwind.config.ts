import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        /**
         * "Station sign" design tokens.
         * The `dark` variants keep WCAG AA contrast on the dark background.
         */
        paper: { DEFAULT: '#F6F7F9', dark: '#0F1319' },
        ink: { DEFAULT: '#16181D', dark: '#E8EAED' },
        sobu: '#F6BE00', // Sōbu Line canary yellow — the only accent color
        steel: { DEFAULT: '#5A6472', dark: '#9AA3AF' },
        rail: { DEFAULT: '#D8DBE0', dark: '#2A313B' },
        board: { DEFAULT: '#FFFFFF', dark: '#1A1F26' }, // station sign board
      },
      fontFamily: {
        sans: ['var(--font-plex-sans-jp)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
