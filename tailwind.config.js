/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Poppins"
      }
    },
  },
  plugins: [],
}

