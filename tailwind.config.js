
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/pattern-bg-desktop.png')"
      }
    },
    fontSize: {
      'base': '99.5%', // Sets the base font size to 10px (62.5% of 16px)
      // Add other font sizes if needed
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
    }
    
  },
  plugins: [],
}

