/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Indigo premium
        secondary: '#06b6d4', // Cyan premium
      },
    },
  },
  plugins: [],
}
