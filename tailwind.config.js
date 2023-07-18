/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Exo: ["Exo"],
        Montserrat: ["Montserrat"],
        Nunito: ["Nunito"],
      },
      colors: {
        Primary: ["#f2a007"]
      }
    },
  },
  plugins: [],
}