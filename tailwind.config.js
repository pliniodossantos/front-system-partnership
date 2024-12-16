/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


   
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  ],
  theme: {
    colors:{
      primaria:'#3C3A3D',
      secundaria:'#BCB8B1',
      terciaria:'#8377D1'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
});
