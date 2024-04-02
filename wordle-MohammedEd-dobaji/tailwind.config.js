/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    	fontFamily: {
			'silkscreen': ['Silkscreen', 'sans-serif'],
    	},
		animation: {
			flip: 'flip 0.5s ease forwards',
		},
		bounce: {
			animation: 'bounce 0.5s ease forwards',
		},		   
	},
  },
  plugins: [],
}

