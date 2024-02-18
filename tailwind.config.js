/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "opacity-zero-black": "rgba (0,0,0,0)",
        "opacity-zero-white": "rgba (255,255,255,0)"  
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

