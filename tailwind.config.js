/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        poppins: [ '"Poppins"', 'sans-serif'],
      },
      colors: {
        brandBlue: '#081b29',
        LBlue: '#00abf0',
        Brand2Blue: '#112e42',
        brandYellow: {
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      fontSize: {
        'h1': '2em',
        'h2': '1.75em',
        'h3': '1.5em',
        'h4': '1.25em',
        'h5': '1em',
        'h6': '0.75em',
      },
      height: {
        '100px': '100px',
        '200px': '200px',
        '416px': '416px',
        // Add more as needed
      },
      width: {
        '100px': '100px',
        '200px': '200px',
        '400px': '400px',
        // Add more as needed
      },
    },
  },
  plugins: [],
}