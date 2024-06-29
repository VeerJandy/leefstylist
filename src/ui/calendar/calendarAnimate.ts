import { transition, variantsNames } from '~/consts/animate'

export const daysVariants = {
  ...variantsNames,
  variants: {
    hidden: { height: 68, opacity: 0, transition },
    visible: { height: 'auto', opacity: 1, transition }
  }
}
