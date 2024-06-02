/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/banner2.jpg')",
        about: "url('/src/assets/about1.png')",
      },

      colors: {
        darkBg: "#14141b",
        darkBlack: "#06070d",
        darkOffBlack: "#1c242b",
        darkYellow: "#FFBF00",
        darkBlue: "#00aee6",
        darkOffBlue: "#2754ba",
        darkText: "#FFFFFF",
        darkGray: "#6b7280",
        offWhite: "#f9f9f9",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
  },
  plugins: [],
});
