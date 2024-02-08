/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        background:"#EEEEEE",
        bordertop:"#3AC7EC",
        lightgreen:"#3FD28B",
        darkgreen:"#1F7A54",
        vuejs:"49e659",
        reactjs:{
          100:"#61DAFB",
        }
      },
 
    },
  },
  // plugins: [require("daisyui")],
}