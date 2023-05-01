/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: "'anton', serif",
        inter: "'inter', serif",
      }
    },
  },
  plugins: [],
}

