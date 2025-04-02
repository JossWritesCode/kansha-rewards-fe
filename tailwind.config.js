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
    },
  },
  plugins: [],
};
