/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      "dark-blue": "#001453",
      "bright-blue": "#004ced",
      "dark-white": "#f8f8f8",
      white: "#FFFFFF",
      "gray-border": "#d5d5d5",
      "gray-text": "#6d6d6d",
      "faq-border": "#e6e6e6",
    },
    extend: {
      fontFamily: {
        sans: ["Euclid Circular A", "sans-serif"],
      },
    },
  },
  plugins: [],
};
