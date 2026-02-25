
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
    wcuCameraDrift: "wcuCameraDrift 28s ease-in-out infinite",
  },
  keyframes: {
    wcuCameraDrift: {
      "0%": { transform: "scale(1.01) translate(0, 0)" },
      "25%": { transform: "scale(1.03) translate(0.3%, -0.2%)" },
      "50%": { transform: "scale(1.02) translate(-0.2%, 0.3%)" },
      "75%": { transform: "scale(1.04) translate(0.2%, 0.1%)" },
      "100%": { transform: "scale(1.01) translate(0, 0)" },
    },
  },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        purple: {
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        dark: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1a1a1a',
          600: '#262626',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
