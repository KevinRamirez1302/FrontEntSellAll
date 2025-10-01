/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        92: '92vh',
      },
      maxWidth: {
        10: '10rem',
      },
      hero: {
        40: '40vw',
      },
      error404: '#659BB7',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ["Montserrat', 'sans-serif"],
    },
  },
  plugins: [],
};
