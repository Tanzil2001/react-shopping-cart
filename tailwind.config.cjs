/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#46e256",
        
"secondary": "#48dd08",
        
"accent": "#f29e37",
        
"neutral": "#322933",
        
"base-100": "#393A47",
        
"info": "#468BC3",
        
"success": "#14A954",
        
"warning": "#9D8407",
        
"error": "#FD6863",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
