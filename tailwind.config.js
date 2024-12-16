/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    colors: {
      brightGrey: "#EAEBF0",
      DarkSapphire: "#121F3E",
      DarkGrey: "#576378",
      desaturatedDarkBlue: "#4E6075",
      darkBlue: "#213899",
      veryPaleBlue: "#F4F6FF",
      LightGrayishBlue: "#FAFBFC",
      lightgrayBlue: "#ECF0F5"
    },
  },
  plugins: [],
};