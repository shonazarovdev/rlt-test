/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_primary: "#fefefe",
        light_primary_text: "#212121",
        dark_primary: "#1d1d1d",
        dark_primary_text: "#ffffff",
      },
      container: {
        center: "true",
      },
    },
  },
  plugins: [],
};
