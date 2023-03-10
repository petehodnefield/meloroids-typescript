/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: '#CA69F9',
        secondary: '#423D47',
        tertiary: '#EFECF0',
        white: '#ffffff',
        light: '#',
        medium: '#999999',
        dark: '#2c2c2c',
        black: '#111111',
        light: '#',
      }
    },
    fontSize: {
      0.625: ['0.625rem'],
      0.75: ['0.75rem'],
      0.75: ['0.75rem'],
      0.875: ['0.875rem'],
      1: ['1rem'],
      1.125: ['1.125rem'],
      1.5: ['1.5rem'],
      2: ['2rem'],
      2.5: ['2.5rem'],
    },
    
   
  },
  plugins: [],
}
