/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      "bluenight": "#142A69",
      "mode": '#C9D3EF'
    }},
  },
  plugins: [],
}
