 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      fontFamily:{
        PlusJakartaSans : ['PlusJakartaSans', 'sans-serif'],
        PlusJakartaExtraBold : ['PlusJakartaSans', 'ExtraBold'],
        PlusJakartaMedium : ['PlusJakartaSans', 'Medium'],
        
      }
     },
   },
   plugins: [],
 }