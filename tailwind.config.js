/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_primary: "#eeeeee",
        light_secondary: "#ffffff",
        light_primary_text: "#212121",
        dark_primary: "#1d1d1d",
        dark_secondary: "#262626",
        dark_primary_text: "#ffffff",
        dark_border: "#4D4D4D",
        delete: "#FA7272",
      },
      container: {
        center: "true",
        padding: {
          DEFAULT: "2rem",
          xs: "1rem",
        },
        maxWidth: "850px",
      },
    },
  },
  plugins: [],
};
