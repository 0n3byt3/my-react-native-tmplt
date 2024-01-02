/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/comp/*.{js,jsx,ts,tsx}', './src/comp/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        yekan: ['IRANYekanMobile'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fff',
        black: '#000',
        lighter: '#ffffff63',
        darker: '#5252521f',
        primary: {
          DEFAULT: '#79F2C0',
        },
        secondary: {
          DEFAULT: '#FFAB00',
        },
        info: {
          DEFAULT: '#4C9AFF',
        },
        success: {
          DEFAULT: '#00875A',
        },
        warn: {
          DEFAULT: '#bf756b',
        },
        error: {
          DEFAULT: '#DE350B',
        },
      },
    },
  },
  plugins: [],
}

