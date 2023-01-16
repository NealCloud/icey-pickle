/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {  
        "walter-primary": "#BED435", 
        "walter-secondry": "#004E71"  
      },
      backgroundImage: {
        'hero-pic': "url('../assets/main1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  plugins: [ require('flowbite/plugin')],
}
