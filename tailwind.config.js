module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlue: "#457b9d",
        buttonBlue: "#1d3557",
        alert: "#e63946",
        lightWhite: "#f1faee",
        lightBlue: "#a8dadc",
        highlight: "#E0A975",
        border: "#DEE2E6",
        gray: {
          light: "#F5F5F5",
          DEFAULT: "#FAFAFA",
          dark: "#ACACAC",
          dark2: "#C4C4C4",
          text: "#11111150",
        },
        dark: {
          light: "#9F9F9F",
          DEFAULT: "#4F4F4F",
          dark: "",
        },
      },
      fontFamily: {
        subHeader: ["Roboto", "sans-serif"],
        header: ["Lora", "serif"],
      },
      spacing: {
        4.5: "1.2rem",
        5.5: "1.45rem",
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
