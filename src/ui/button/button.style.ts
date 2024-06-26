import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const buttonStyle = tv({
  base: [
    'tap-highlight-transparent',
    'relative',
    'inline-flex',
    'max-w-fit',
    'items-center',
    'box-border',
    'transition-colors',
    'active:scale-[0.97]',
    'transition-transform-colors-opacity',
    'select-none',
    'overflow-hidden'
  ],
  variants: {
    variant: {
      solid: ''
    },
    color: {
      default: 'bg-dark text-white hover:bg-black',
      white: 'border border-light bg-white text-dark hover:bg-light'
    },
    size: {
      default: 'px-6 py-2'
    },
    rounded: {
      none: 'rounded-none',
      default: 'rounded',
      full: 'rounded-full'
    },
    disabled: {
      true: 'pointer-events-none bg-opacity-80 text-opacity-50 backdrop-blur-xl'
    }
  },
  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'default',
    rounded: 'default'
  }
})

export type ButtonVariants = VariantProps<typeof buttonStyle>
