/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        5: '1.25rem',
        10: '2.5rem',
        16: '4rem',
      },
      colors: {
        primary: {
          DEFAULT: '#A78BFA', // Main primary color (violet)
          light: '#DDD6FE', // Lighter version of the primary color
          dark: '#7542C7', // Darker version of the primary color
        },
        secondary: {
          DEFAULT: '#f3f4f6', // Neutral grey for secondary elements
          light: '#F5F5F5',
          dark: '#DEE2E6', // Slightly darker grey for subtle border
        },
        accent: {
          yellow: '#C5832B', // Yellow for accents or emphasis
          purple: '#A11B67', // Purple for accents or emphasis
        },
        neutral: {
          white: '#ffffff', // White for backgrounds
          light: '#FCFCFC', // Near-white for very light backgrounds
          muted: '#525252', // Medium grey for muted text/icons
        },
        text: {
          DEFAULT: '#212427', // Dark text color (primary content)
          light: '#54595E', // Slightly lighter text for secondary content
        },
        success: {
          DEFAULT: '#4d7c0f', // Green for success indicators
          hover: '#84cc16',
        },
        error: {
          DEFAULT: '#b91c1c', // Red for error indicators
          hover: '#ef4444',
        },
      },
      backgroundImage: {
        'custom-gradient-alt': 'linear-gradient(to right, #DDD6FE, #FFF7CD, #FBCFE8)',
      },
    },
  },
  plugins: [],
};
