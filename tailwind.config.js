const { Nunito } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height:{
        '13.5': '3.375rem', 
        '200':'60rem'
      },
      fontFamily:{
        sans: ['Nunito', 'sans-serif'],
      },
      width:{
        '41': '10.25rem',
        "100":"50rem",
      },
      colors:{
        Ace:'#0E7490',
        heading:'#334155',
        text:  '#64748B',
        text1:"#475569"
      },
      margin:{
        '60':'15rem'
      }
    },
  },
  plugins: [],
};
