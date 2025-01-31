/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_primary: "#fefefe",
        dark_primary: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
