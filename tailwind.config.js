/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom blue palette based on the provided image
        blue: {
          50: '#F0F5F9', // Lightest, for subtle backgrounds
          100: '#C0CDD9', // Lighter blue for outlines/borders
          200: '#A4B8CD', // Used for accents like technology tags
          300: '#88A3BD',
          400: '#6C8EA1',
          500: '#008BC4', // Lighter blue
          600: '#006C9C', // Medium blue
          700: '#3C5C8C', // Medium dark blue
          800: '#2C3A5A', // Darker blue for text/backgrounds
          900: '#1D2A3B', // Darkest blue, primary text/main backgrounds
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
    },
  },
  plugins: [],
}
