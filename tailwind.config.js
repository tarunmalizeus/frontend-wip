/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  purge:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    '!./src/pages/job/Confirmation.jsx'
  ],


  theme: {

    extend: {
      colors:{
        background:"#EEEEEE",
        bordertop:"#3AC7EC",
        lightgreen:"#3FD28B",
        darkgreen:"#1F7A54",
        backgroundyellow:"#EEDD6B",
        accordianblue:"#DBEFFF",
        vuejs:"49e659",
        reactjs:{
          100:"#61DAFB",
        }
      },
 
    },
  },
  // plugins: [require("daisyui")],
}