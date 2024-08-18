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
      black: "#000000",
    },
    extend: {
      fontFamily: {
        sans: ["Euclid Circular A", "sans-serif"],
      },
      boxShadow: {
        "custom-shadow": "0 2px 12px 0 rgba(0, 0, 0, 0.06)",
      },

      transitionProperty: {
        "max-height": "max-height",
      },
      transitionDuration: {
        1400: "1400ms",
      },
    },
  },
  plugins: [],
};
