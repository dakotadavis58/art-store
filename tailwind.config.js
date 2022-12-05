/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8171FF",
        primaryLight: "#AFAFFF",
        primaryDark: "#534DFF",
        secondary: "#FF71A7",
        secondaryLight: "#FFAFCF",
        secondaryDark: "#FF4D8B",
        tertiary: "#EFFF71",
        tertiaryLight: "#FFFFAF",
        tertiaryDark: "#DFFF4D",
        bgMain: "#000000",
        bgSecondary: "#111111",
      },
    },
  },
  plugins: [],
};
