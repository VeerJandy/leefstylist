import { ComponentPropsWithoutRef } from 'react'

import type { SpinnerVariants } from './spinner.style'
import { spinnerStyle } from './spinner.style'

type SpinnerProps = SpinnerVariants & ComponentPropsWithoutRef<'div'>

const Spinner = (props: SpinnerProps) => {
  const slots = spinnerStyle(props)

  return (
    <div {...props}>
      <div className={slots.wrapper()}>
        <i className={slots.circle1()} />
        <i className={slots.circle2()} />
      </div>
    </div>
  )
}

export default Spinner
