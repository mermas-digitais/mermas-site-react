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
      boxShadow: {
        'card': '0px 0px 9px rgba(0, 0, 0, 0.15), inset 0px 0px 4px rgba(0, 0, 0, 0.05);',
        'pop' : '0px 0px 8px rgba(0, 0, 0, 0.10)'
      },
      backgroundImage: {
        star :  "url('/public/image/star.png')",
      },
      colors: {
        "yellow": '#ffcd34',
        "salmon": '#fc8370',
        "white": '#ffffff',

        "purple":{
          100: '#ddc7f8',
          300: '#a688ff',
          500: '#9854CB',
          900: '#330043'
        },
        "pink":{
          100: '#FEF0ED',
          500: '#ff4a97',
        },
        "gray": {
          100: '#D4D4D8',
          200: '#9CA3AF',
          400: '#545454',
          500: '#333333',
        },

      },
    },
  },
  plugins: [],
}
