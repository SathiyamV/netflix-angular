/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'glossy': 'rgba(255, 255, 255, 0.50)',
        'cont-2':'linear-gradient(180deg, rgba(20, 20, 20, 0.00) 0%, #141414 7.48%)'
      }
    },
  },
  plugins: [],
};
