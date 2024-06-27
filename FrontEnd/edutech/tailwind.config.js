module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  // plugins: [
  //   require('flowbite/plugin')
  // ],
  plugins: [
    require('flowbite/plugin')({
        charts: true,
    }), ]
};

