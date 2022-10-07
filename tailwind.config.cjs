/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens:{
        'sm':'360px',
        'md': '768px',
        'lg': '1024px',
        'xl':'1280px',
        '2xl':'1536px'
      },
      colors:{
        'pink': '#E22454',
      },
    },
  },
  plugins: [],
}
