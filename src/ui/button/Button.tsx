'use client'

import type { UseButton } from './useButton'
import { useButton } from './useButton'

const Button = (props: UseButton) => {
  const {
    state: { buttonProps }
  } = useButton(props)

  return <button {...buttonProps}>{props.children}</button>
}

export default Button
