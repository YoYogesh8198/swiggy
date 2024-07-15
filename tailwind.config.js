/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // 'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['My Font','ProximaNova (woff2) arial Helvetica Neue sans - serif' ] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [],
}

