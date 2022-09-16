/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "hard": "10px 10px 0px rgba(0, 0, 0, 0.25)",
        "far": [
          "20px 20px 0px rgba(0, 0, 0, 0.25)",
          // "20px 20px 0px rgba(0, 0, 0, 0.15)",
        ],
      },
      fontSize: {
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "7rem",
      },
      colors: {
        dark: "#042e27",
        darkRed: "#dc3d4b",
        lightRed: "#fa4454",
      },
      fontFamily: {
        akira: "Akira",
        valorant: "Valorant",
        din:"din",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
