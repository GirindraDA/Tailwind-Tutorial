/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "cursive"],
      },
      colors: {
        primary1: "#003E29",
        primary2: "#E4BBA1",
        primary3: "#D9D9D9",
        borderColor: "#787878",
        bgcolor: "#EDEDED",
        bgGreen: "#023423",
      },
    },
  },
  plugins: [],
}
