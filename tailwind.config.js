/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "hsl(209, 23%, 22%)",
        bgDark: "hsl(207, 26%, 17%)",
        dark: "hsl(200, 15%, 8%)",
        customeGray: "hsl(0, 0%, 52%)",
        bgLight: "hsl(0, 0%, 98%)"
      },
      fontFamily: {
        NunitoSans: ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

