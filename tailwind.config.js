/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'blue-dianne': '#344C57',
        'deep-amethyst': '#9F89AB',
        'blue-dianne-blur': 'rgba(20, 30, 34, .8)',
      },
      fontFamily: {
        'handjet-regular': 'Handjet Regular',
        'handjet-bold': 'Handjet-Black',
        'handjet-semibold': 'Handjet-SemiBold',
        'handjet-normal': 'Handjet',
      },
    },
  },
  plugins: [],
};
