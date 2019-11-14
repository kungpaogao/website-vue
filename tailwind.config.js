const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      display: ["Nunito", "sans-serif"],
      head: ["Lato", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },
    colors: {
      accent: colors.blue,
      text: "#001F3F",
    },
    zIndex: {
      "-10": "-10",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
