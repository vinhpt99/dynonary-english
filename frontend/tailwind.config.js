module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc', 
        'secondary': '#ffed4a', 
        'accent': '#38b2ac',
        'custom-gray': '#6b7280',
        'forest-green': '#358d4e', 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
