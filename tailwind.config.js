/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F9F4EC',
          200: '#F2E9DA',
          300: '#E8D9C3',
        },
        blush: {
          50: '#FDF5F6',
          100: '#FBE9EC',
          200: '#F5D3DA',
          300: '#EDB3BE',
          400: '#E08FA0',
          500: '#D06B82',
          600: '#B8526B',
          700: '#974055',
        },
        peach: {
          100: '#FBE7DC',
          200: '#F6D0BD',
          300: '#EFB89E',
          400: '#E69E80',
        },
        lavender: {
          100: '#F0EAFA',
          200: '#E0D4F2',
          300: '#C9B6E6',
          400: '#B095D6',
        },
        sage: {
          100: '#E8EEE4',
          200: '#D0DCC7',
          300: '#A9BC9B',
        },
        ink: {
          700: '#4A4239',
          800: '#38322B',
          900: '#2A2620',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(74, 66, 57, 0.18)',
        card: '0 12px 40px -12px rgba(74, 66, 57, 0.22)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
