/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-light": "#F3FCF9",
        "green-dark": "rgba(65, 214, 174, 1)",
        "green-darker": "#24C79C",
        "green-soft": "#26E2AF",
        softwhite: "hsla(44,6%,50%,.15);",
        HTML: "#e34c26",
        CSS: "#2965cc",
        JavaScript: "#f1e05a",
        React: "#61dafb",
      },
    },
  },
  plugins: [],
};
