/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontSize: {
        '30xl': ['1.875rem', '1.25'],
        '3xl': ['2.1875rem', '1.25'],
        '5xl': ['2.8125rem', '1.25']
      },
      fontFamily: {
        prompt: ['var(--font-prompt)'],
        kinetica: ['var(--font-kinetica)']
      },
      colors: {
        'main-purple': '#8000FF'
      },
      borderWidth: {
        1: '0.0625rem'
      },
      height: {
        1: '0.0625rem'
      },
      borderRadius: {
        20: '20px'
      },

      animation: {
        'spin-slow': 'spin 4s linear infinite'
      }
    }
  },
  plugins: []
}
