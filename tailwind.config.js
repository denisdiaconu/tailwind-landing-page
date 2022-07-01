/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tBlue: "#35EEED",
        tPurple: "#ED02FF",
        tOrange: "#F9A23F"
      },
      screens: {
        'smb': '1050px'
      }
    },
  },
  plugins: [],
}
