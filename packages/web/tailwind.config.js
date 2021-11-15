module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  mode: "jit",
  theme: {
    colors: {
      accent: '#4C53FF',
      accent2: '#8388FF',
      loading: '#9498ff',
      darkGray: '#1a1a1a',
      errorAlert: '#BF0404',
      successAlert: '#4BB543',
      hover: '#3d42cc',
      white: '#FFFFFF',
      lightGray: '#A1A1A1',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
