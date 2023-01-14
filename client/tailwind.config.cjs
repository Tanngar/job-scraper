/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      title: ['Roboto', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          500: '#44CF6C',
          600: '#44CF6C',
        },
        temp: {
          400: '#405054',
          500: '#2B3D41',
          600: '#27373b',
          700: '#223134',
          800: '#161f21',
          900: '#0d1213',
        },
      },
    },
  },
  plugins: [],
};
