/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,style.ts}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '375px'
      }
    },
    colors: {
      transparent: 'transparent',
      white: 'var(--white)',
      black: 'var(--black)',
      dark: 'var(--dark)',
      light: 'var(--light)',
      'gray-1': 'var(--gray-1)',
      'gray-2': 'var(--gray-2)',
      'gray-3': 'var(--gray-3)',
      'gray-4': 'var(--gray-4)',
      blue: 'var(--blue)'
    },
    borderRadius: {
      none: '0',
      low: 'var(--border-radius-low)',
      DEFAULT: 'var(--border-radius)',
      medium: 'var(--border-radius-medium)',
      big: 'var(--border-radius-big)',
      full: 'var(--border-radius-full)',
      circle: '50%'
    },
    transitionDuration: {
      0: '0s',
      DEFAULT: 'var(--transition)',
      low: 'var(--transition-low)',
      medium: 'var(--transition-medium)'
    },
    zIndex: {
      toast: 'var(--z-index-toast)',
      popup: 'var(--z-index-popup)',
      modal: 'var(--z-index-modal)',
      header: 'var(--z-index-header)',
      high: 'var(--z-index-high)',
      medium: 'var(--z-index-medium)',
      low: 'var(--z-index-low)',
      one: 'var(--z-index-one)',
      minus: 'var(--z-index-minus)'
    },
    extend: {
      animation: {
        'spinner-ease-spin': 'spinner-spin 0.8s ease infinite',
        'spinner-linear-spin': 'spinner-spin 0.8s linear infinite'
      },
      keyframes: {
        'spinner-spin': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      }
    }
  },
  plugins: []
}
