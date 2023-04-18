/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      container: '1440px',
      contentContainer: '1140px',
      containerSmall: '1024px',
      containerExtraSmall: '768px'
    },
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        bodyFont: ['Montserrat','sans-serif'],
        titleFont: ['Inter','sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        navbarShadow: '0 10px 30px, -10px rgba(2,12,27,0.7)'
      },
      colors: {
        bodyColor: '#0A192F',
        textGreen: '#64FFDA',
        textLight: '#CCD6F6',
        textDark: '#8892B0',
        hoverColor: 'rgba(100,255,218,0.1)'
      }
    },
  },
  plugins: [],
}
