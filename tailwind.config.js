
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#4A4A4A",
        orange: "#FB980F"
      },
      fontFamily: {
        'lato': ['"Lato"', 'sans-serif'],
        'manrope': ['"Manrope"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
