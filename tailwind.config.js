/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Azul profundo institucional
          navy: '#0B192C',
          blue: '#1E3E62',
          // Verde sustentable y energético
          emerald: '#10B981',
          green: '#059669',
          // Accentos claros e institucionales
          light: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}