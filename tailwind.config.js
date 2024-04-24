/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      cellCorrect : '#79b851',
      cellWrongPosition : '#f3c237',
      cellWorngLetter : '#a4aec4',
    },
    extend: {
      container : {
        center : true,
      },
    },
  },
  plugins: [],
}