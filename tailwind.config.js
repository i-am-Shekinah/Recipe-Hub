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
      },
      colors: {
        primary: "#ff4000",
        secondary: "#808000"
      }
    },
  },
  plugins: [],
}

