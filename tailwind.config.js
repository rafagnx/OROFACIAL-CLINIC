/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#0D121E",
        darkBlue: "#080B16",
        Orange: "#F0B35B",
        lightGray: "#E6E6E6",
        darkYellow: "#392912",
      },
      fontFamily: {
        sans: 'Open Sans',
        montserrat: 'Montserrat',
      }
    },
  },
  plugins: [],
}

