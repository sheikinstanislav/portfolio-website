/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx, module.css, css}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'anonymous-pro': ['Anonymous Pro', 'monospace'],
      },
    },
  },
  plugins: [],
};
