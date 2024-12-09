/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        founders: ['FoundersGrotesk', 'sans-serif'],
        icomoon: ['Icomoon', 'sans-serif'],
        neuMontreal: ['NeueMontreal', 'sans-serif'],
      }
    },
  },
  plugins: [],
}