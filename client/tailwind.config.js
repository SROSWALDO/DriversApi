/** @type {import('tailwindcss').Config} */
import BackgorundHome from './src/assets/BackgorundHome.jpg'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-home': "url(./assets/BackgroundHome.jpg)"
      }
    },
  },
  plugins: [],
}

