/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "hotel": "#3f8fcf",
        "hotel-dark": "#4371a3"
      }
    },
  },
  plugins: [],
}