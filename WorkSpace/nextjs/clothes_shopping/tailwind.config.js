/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: { primary: "#fea928", secondary: "#ed8900" },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
