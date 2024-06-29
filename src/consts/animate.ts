export const durationSmall = 0.24
export const durationMedium = 0.422

export const easeMedium = [0.4, 0, 0.6, 1]
export const transition = {
  duration: durationSmall,
  ease: easeMedium
}

interface AnimateVariant {
  variants: {
    hidden: Record<string, string | number | object>
    visible: Record<string, string | number | object>
  }
  initial: string
  animate: string
  exit: string
}

export type AnimateVariantKeys = 'opacity' | 'height'

type Variants = Record<AnimateVariantKeys, AnimateVariant>

export const variantsNames = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden'
}

export const variants: Variants = {
  opacity: {
    ...variantsNames,
    variants: {
      hidden: { opacity: 0, transition },
      visible: { opacity: 1, transition }
    }
  },
  height: {
    ...variantsNames,
    variants: {
      hidden: { height: 0, transition },
      visible: { height: 'auto', transition }
    }
  }
}
