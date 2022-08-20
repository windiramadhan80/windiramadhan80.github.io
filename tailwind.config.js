/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        'primary': '#4f46e5',
        'secondary': '#64748b',
      },
      fontFamily: {
        'inter': ['Inter, sans-serif']
      }
    },
  },
  plugins: [],
}
