module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  mode: "jit",
  theme: {
    colors: {
      bg: "#0D0D0E",
      darkGray: "#1a1a1a",
      lightGray: "#A1A1A1",
      accent: "#4C53FF",
      accent2: "#8388FF",
      loading: "#9498ff",
      errorAlert: "#BF0404",
      successAlert: "#4BB543",
      hover: "#3d42cc",
      white: "#FFFFFF",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
