/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    container:{
      center: true,
      padding: {
        default: '100px', 
        md: "175px",
      }
    },


  },

  
  plugins: [],

  
}

