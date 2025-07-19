/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans- serif"],
        Rub: ["Rubik", "sans-serif"],
      },
      colors: {
        brainyWaveBlack: "#161C2D",
        brainyWavePurple: "#473bf0",
        brainyServiceBG: "#E7E9D",
        brainyGreen: "#68d585",
        babyBlue: "#473BF0",
        NewColor: "#161C2D",
        brainyCream: "#F4F7FA",
        babyGreen: "#68D585",
      },
    },
  },
  plugins: [],
};
