/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-rich-black': '#0F1020',
        'custom-violet': '#2F195F',
        'custom-very-dark-cyan': '#00494d',
        'custom-dark-grayish-cyan': '	#5e7a7d',
        'custom-grayish-cyan': '	#7f9c9f',
        'custom-light-grayish-cyan': '	#c5e4e7',
        'custom-very-light-grayish-cyan': '	#f4fafa',
        'custom-strong-cyan': '	#26c0ab',

      }
    },
  },
  plugins: [],
}