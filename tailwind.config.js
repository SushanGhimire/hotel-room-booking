module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlue: "#457b9d",
        buttonBlue: "#1d3557",
        alert: "#e63946",
        lightWhite: "#f1faee",
        lightBlue: "#a8dadc",
      },
      fontFamily: {
        subHeader: ["Dosis", "sans-serif"],
        header: ["Roboto", "sans-serif"],
      },
      spacing: {
        68: "17rem",
        100: "30rem",
        102: "32rem",
        104: "34rem",
        106: "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
