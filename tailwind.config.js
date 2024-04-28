/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{vue,js,ts}', './views/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Vazirmatn: ['Vazirmatn', ...defaultTheme.fontFamily.sans],
        'Vazirmatn FD': ['Vazirmatn FD', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-primary-120": "#184973",
        "brand-primary-100": "#00567C",
        "brand-primary-80": "#126285",
        "brand-primary-60": "#4D89A3",
        "brand-primary-40": "#1A99D6",
        "brand-white": "#FFFFFF",
        "brand-gray-50": "#e0e0e0",
        "brand-black": "#333333",
        "brand-gray-80": "#869791",
        "brand-gray-60": "#EFEFEF"
      }
    }
  },
  plugins: []
}

