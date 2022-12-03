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
        secondary: "#EFFF71",
        tertiary: "#FF71A7",
        bgMain: "#000000",
        bgSecondary: "#111111",
      },
    },
  },
  plugins: [],
};
