/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/**/*.{tsx,ts,html}',
  ],
  theme: {

    fontFamily:{
      'paytone': ['Paytone One', 'sans-serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    },

    extend: {
      backgroundImage: {
        star :  "url('/public/image/star.png')",
      },
      colors: {
        "yellow": '#ffcd34',
        "salmon": '#fc8370',
        "white": '#ffffff',

        "purple":{
          300: '#ddc7f8',
          500: '#a688ff',
          900: '#330043'
        },
        "pink":{
          100: '#fbeefe',
          500: '#ff4a97',
        },
        "gray": {
          100: '#D4D4D8',
          400: '#545454'
        },

      },
    },
  },
  plugins: [],
}
