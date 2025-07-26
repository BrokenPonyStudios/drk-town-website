/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'drk-red': '#e30613',
        'drk-red-dark': '#c40411',
        'drk-dark': '#333333',
        'drk-grey': '#f0f0f0',
        'drk-blue': '#005594',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};