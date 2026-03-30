/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fde047',
          DEFAULT: '#facc15',
          dark: '#eab308'
        },
        dark: {
          DEFAULT: '#000000',
          elevated: '#111111',
          border: '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
