/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#2dc2b2",
        brown: "#1B1404",
        yellow: "#FCC028",
      },
    },
  },
  plugins: [],
};
