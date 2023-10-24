/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./portfolio.html",
    "./portfolio.js",
    "./input.css",
    "./output.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans'],
        'serif': ['Great Vibes', 'serif'],
        custom: ['Poppins', 'sans'],
        custom1: ['Russo one', 'sans'],
      },
      screens: {
        'sssm': '300px',
        'ssm': '500px',
        'smd': '700px',
        'md': '900px',
        'xl': '1240px',
      },
      borderWidth: {
        '1': '1px',
      },

      boxShadow: {
        'sm': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'lg': '0 3px 4px 0 rgba(0, 0, 0, 0.08)'
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}


