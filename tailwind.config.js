/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "dm-font":["DM Sans"],
        "dm-sans":["sans-serif"]
      },
      boxShadow:{
        "number-widget-shadow":'16px 18px 34px 0px rgba(206,203,203,0.75)'
      }
    },
  },
  plugins: [],
}

