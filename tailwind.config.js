/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      primary: '#ffffff',
      secondary: '#353535',
      tertiary: '#d9d9d9',
      green: '#22c55e',
      blue: '#3B82F6',
      red: "#e0162b",
      orange: "#fdba74",
      yellow: "#facc15"
    },
  },
  plugins: [],
}