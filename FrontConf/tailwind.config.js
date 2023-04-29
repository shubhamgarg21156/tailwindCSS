/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './public/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fira Sans', ...defaultTheme.fontFamily.sans],
      },
      // colors:{
      //   'primary': "#5555ff"
      // },
      // height:{
      //   "13" : "3.25rem",
      //   "logo" : "5.3rem"
      // }
    },
  },
  plugins: [],
}

