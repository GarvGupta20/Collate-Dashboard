/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns : {
        sidebar : "300px auto",
      },
      gridTemplateRows : {
          header : "64px auto",
      },
    },
  },
  plugins: [],
}