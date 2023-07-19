/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray : {
          DEFAULT: '#1F1F1F',
          900: '#1F1F1F',
          800: '#252526',
          700: '#39393B',
          600: '#46464A',
          500: '#525256',
          400: '#5F5F63',
          300: '#8C8C8C',
          200: '#e6e6e6',
          100: '#f1f1f1',
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
