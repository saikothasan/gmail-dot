/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4285F4',
        secondary: '#34A853',
        accent: '#FBBC05',
      },
    },
  },
  plugins: [],
};