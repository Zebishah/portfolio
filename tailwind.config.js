/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans'],
        custom1: ['Russo one', 'sans'],
      },
      boxShadow: {
        'sm': '0 1px 4px 0 rgba(0, 0, 0, 0.08)',
        'lg': '0 3px 4px 0 rgba(0, 0, 0, 0.08)'
      },
    },
  },
  plugins: [],
}

