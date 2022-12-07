/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["border-b-2", "border-b-tertiary"],
  theme: {
    screens: {
      xs: "400px",
    },
    extend: {
      colors: {
        primary: {
          main: "#8171FF",
          light: "#AFAFFF",
          dark: "#40387F",
        },
        secondary: {
          main: "#FF71A7",
          light: "#FFAFCF",
          dark: "#FF4D8B",
        },
        tertiary: {
          main: "#EFFF71",
          light: "#FFFFAF",
          dark: "#DFFF4D",
        },
        bgMain: "#000000",
        bgSecondary: "#111111",
      },
    },
  },
  plugins: [],
};
