/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables dark mode using class strategy
  theme: {
    extend: {
      colors: {
        seafoam: {
          light: '#A8F0D1',
          DEFAULT: '#4FD1C5',
          dark: '#2C7A7B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
