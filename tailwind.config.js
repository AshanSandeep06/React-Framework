/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "abc": {
          300: '#37306B',
          200: '#66347F',
          100: '#865DFF'
        }
      },

      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      }
    },

  },
  plugins: [],
}
