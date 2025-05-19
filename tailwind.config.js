/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primaryCol" : "#65AFBA"
      },
       backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, #65ABA2 9.5%, rgba(0, 0, 0, 0) 100%)',
      },
    },
  },
  plugins: [],
}