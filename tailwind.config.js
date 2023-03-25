/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#211D20',
        'primary-light': '#7E7981',
        'light-text': 'rgb(156 163 175)',
        'dark-text': '#2F2A32',
        'light-text-2': 'rgb(229 231 235)'
      },

    },
  },
  plugins: [],
}