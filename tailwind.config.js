module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class", // enables toggling dark mode via class
  theme: {
    extend: {
      colors: {
        primaryTeal: {
          DEFAULT: "#378D90", // Light mode
          dark: "#A0E9EB", // Brighter teal for dark mode to improve readability
        },
        tealLight: "#6DB6B8",
        tealDark: "#255F61",
        complementaryCoral: {
          DEFAULT: "#903737", // Coral for light mode
          dark: "#FF6B6B", // Brighter coral for dark mode buttons for improved contrast
        },
        coralLight: "#B86D6D",
        coralDark: "#612525",
        softWhite: "#F3F4F6",
        warmGray: {
          DEFAULT: "#B0B1B4", // Light mode gray
          dark: "#55565A", // Darker warm gray for dark mode backgrounds
        },
        darkCharcoal: "#323232",
      },
      fontFamily: {
        sans: ["Roboto Slab", "sans-serif"], // Overrides Tailwind’s default sans-serif with Roboto
        serif: ["Merriweather", "serif"], // Overrides Tailwind’s default serif with Merriweather
      },
    },
  },
  plugins: [],
};
