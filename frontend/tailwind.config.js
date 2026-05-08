/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F9F8F6',
          soft: '#F0EFEA',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#555555',
        },
        accent: {
          DEFAULT: '#C8102E',
          dark: '#8A0B20',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
      },
      letterSpacing: {
        editorial: '0.2em',
      },
    },
  },
  plugins: [],
};
