/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,css,js,scss}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        black: "#121212",
        white: "#fafafa",
      },
    },
  },
  plugins: [],
};
