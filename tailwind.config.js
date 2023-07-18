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
          900: '#1F1F1F',
          800: '#252526',
          700: '#39393B',
          600: '#8C8C8C',
          500: '#BFBFBF',
          400: '#D4D4D4',
          300: '#E1E1E1',
          200: '#F0F0F0',
          100: '#F8F8F8',
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
  },
  plugins: [],
}
