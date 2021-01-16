module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {colors: {
      shamrock: {
        '50':  '#ebf8f7',
        '100': '#d1f7f1',
        '200': '#a0f2df',
        '300': '#61e9ca',
        '400': '#1dd9a8',
        '500': '#38b48b',
        '600': '#08a965',
        '700': '#0e8b55',
        '800': '#116d48',
        '900': '#11583d',
      },
      steel: {
        '50':  '#f2fafb',
        '100': '#dff6fa',
        '200': '#b7ebf5',
        '300': '#85dbf2',
        '400': '#43bced',
        '500': '#1c97e7',
        '600': '#1574d7',
        '700': '#185cb3',
        '800': '#174684',
        '900': '#153966',
      },
    }
  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
