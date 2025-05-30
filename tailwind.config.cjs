/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['8rem', { lineHeight: '1' }],
        '11xl': ['9rem', { lineHeight: '1' }],
        '12xl': ['10rem', { lineHeight: '1' }],
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}