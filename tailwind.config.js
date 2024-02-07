/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        background:"EEEEEE",
        vuejs:"49e659",
        reactjs:{
          100:"#61DAFB",
        }
      },
 
    },
  },
  plugins: [],
}