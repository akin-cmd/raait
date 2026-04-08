/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-navy': '#0D1117',
        'raait-blue': '#0062FF',
        'raait-cyan': '#5AC8FA',
        'trust-green': '#00E699',
      },
    },
  },
  plugins: [],
}
