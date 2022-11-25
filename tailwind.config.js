/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            white: '#f9f6f4',
            green: {
                500: '#41773c'
            },
            black: '#2d2928'
        }
    },
  },
  plugins: [],
}
