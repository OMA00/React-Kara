/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans- serif"],
      },
      colors: {
        brainyWaveBlack: "#161C2D",
        brainyWavePurple: "473bf0",
        brainyServiceBG: "E7E9D",
        brainyGreen: "#68d585",
      },
    },
  },
  plugins: [],
};
