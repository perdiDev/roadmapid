/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2.5rem',
        lg: '160px',
        xl: '160px',
        '2xl': '7rem',
      },
    },
    fontFamily: {
      'sans': ['Jaldi', 'sans-serif'],
    },
    extend: {
      colors: {
        'green': '#00681D',
        'blue': '#091685',
        'white-1': '#F1E9E9',
        'blue-one': '#06053A',
        'blue-two': '#0E1020',
        'detail': '#06053A',
        'green-button': '#09D442',
        'blue-button': '#000D80',
      },
    },
  },
  plugins: [],
}
