/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nf: "'Neutral Face'",
        nfb: ['Neutral Face Bold', 'sans-serif'],
        inter: "'Inter'",
      },
      colors: {
        primary: '#89023E',
        secondary: '#F3DFBF',
        accent: '#47624F',
      },

    },
  },
  plugins: [],
}
