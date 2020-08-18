module.exports = {
  theme: {
    screens: {
      xs: { max: '575px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited'],
    opacity: ['responsive', 'hover', 'focus', 'visited'],
    boxSizing: ['responsive', 'hover', 'focus'],
  },
};
