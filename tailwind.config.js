/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

import { default as formsPlugin } from "@tailwindcss/forms";
   
export default withMT({
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
    formsPlugin
  ],
});
