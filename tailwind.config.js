const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'kosugi': ['Kosugi', 'serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require("daisyui"), nextui()],
}

