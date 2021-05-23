module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: 'Lato',
    extend: {
      colors: {
        primary: '#49C5B6',
        secondary: '#FF9398',
        textGray: '#909398',
        bgLight: '#eceff1',
        bgDark: '#2b2b2b'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
