/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#F8F8F8',
          '200': '#E0E0E0',
          '300': '#C8C8C8',
          '400': '#888888',
          '500': '#707070',
          '600': '#505050',
          '700': '#383838',
          '800': '#282828',
          '900': '#101010',
          DEFAULT: '#101010',
        },
        green: {
          DEFAULT: '#ADFF00',
          900: 'rgba(173, 255, 0, 0.9)',
          800: 'rgba(173, 255, 0, 0.8)',
          700: 'rgba(173, 255, 0, 0.7)',
          600: 'rgba(173, 255, 0, 0.6)',
          500: 'rgba(173, 255, 0, 0.5)',
          400: 'rgba(173, 255, 0, 0.4)',
          300: 'rgba(173, 255, 0, 0.3)',
          200: 'rgba(173, 255, 0, 0.2)',
          100: 'rgba(173, 255, 0, 0.1)',
        }

      }
    },
    fontFamily:{
      'sans':  ['"Inter"', 'sans-serif'],
    }
  },
  plugins: [],
}
