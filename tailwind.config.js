/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,style.ts}'],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '93.75rem'
      }
    },
    colors: {
      transparent: 'transparent',
      white: 'var(--white)',
      black: 'var(--black)',
      dark: 'var(--dark)',
      light: 'var(--light)'
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
    }
  },
  plugins: []
}
