/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '480px',   // Small devices like mobile
        'md': '768px',   // Medium devices like tablets
        'lg': '1024px',  // Large devices like laptops
        'xl': '1280px',  // Extra-large devices like desktops
        '2xl': '1536px', // Ultra-large screens
      }
    },
    fontFamily: {
      'kanit' : ['Kanit']
    }
  },
  plugins: [],
}

