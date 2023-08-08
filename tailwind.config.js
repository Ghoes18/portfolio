/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF9C1B',
        'secondary': '#EC1B09',
        'tertiary': '#F2F5F9',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
}

