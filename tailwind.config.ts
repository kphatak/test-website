import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e7d9ff',
          100: '#d5c4fb',
          200: '#b99ef5',
          300: '#9d78ea',
          400: '#8868c0',
          500: '#7559ac',
          600: '#604892',
          700: '#4b3878',
          800: '#36285e',
          900: '#221844',
        },
        gold: {
          50: '#fef1fb',
          100: '#fbd8f2',
          200: '#f5b1e5',
          300: '#f094dc',
          400: '#ea77d4',
          500: '#d55dbd',
          600: '#b8449f',
          700: '#90337d',
          800: '#68245b',
          900: '#411539',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
