/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // all React components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'], // default sans font
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#0f0f33',
          white: '#ffffff',
          softBeach: '#fcf9f9',
          textBlack: '#000d22',
          boulder: '#757575',
          busyBerry: '#c91757',
          busyBerryDark: '#b7154e',
          black: '#000D22',
        },
      },
    },
  },
  plugins: [],
};
