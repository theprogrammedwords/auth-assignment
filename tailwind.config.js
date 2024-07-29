module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryGray: "#27292D",
        secondaryGray: "#6A6B6B",
        borderGrayLight: "#969696",
        borderGrayDark: "#343434",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
