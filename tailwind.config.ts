/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'main': '#0D6EFD',
      'darker': '#2659BF',
      'lighter': '#99BBFF',
      'subtitle': '#E3EDFF',
      'primary': '#0D6EFD',
      'background-primary': '#F2FDFF',
      'background-secondary': '#101935',
      'background-default': '#FFFFFF',
      'typo-default-dark': '#212427',
      'typo-default-light': '#FCFCFC',
      'typo-secondary-light': '#ABB5BE',
      'typo-secondary-dark': '#54595E',
      'primary-grey-light': '#E9ECEF',
      'secondary-grey-light': '#E9ECEF',
      'status-success': '#28A745',
      'status-error': '#DC3545',
    },
    fontFamily: {
      sans: ['Sen', 'sans-serif'],
      serif: ['Zilla Slab', 'serif'],
    }
    },
  },
  plugins: [],
}