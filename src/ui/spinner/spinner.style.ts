import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const spinnerStyle = tv({
  slots: {
    base: 'relative inline-flex flex-col items-center justify-center gap-2',
    wrapper: 'relative flex',
    circle1: [
      'absolute',
      'w-full',
      'h-full',
      'rounded-full',
      'animate-spinner-ease-spin',
      'border-2',
      'border-solid',
      'border-t-transparent',
      'border-l-transparent',
      'border-r-transparent'
    ],
    circle2: [
      'absolute',
      'w-full',
      'h-full',
      'rounded-full',
      'opacity-75',
      'animate-spinner-linear-spin',
      'border-2',
      'border-dotted',
      'border-t-transparent',
      'border-l-transparent',
      'border-r-transparent'
    ],
    label: 'text-foreground dark:text-foreground-dark font-regular'
  },
  variants: {
    size: {
      sm: {
        wrapper: 'size-5',
        circle1: 'border-2',
        circle2: 'border-2',
        label: 'text-small'
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

export type SpinnerVariants = VariantProps<typeof spinnerStyle>
