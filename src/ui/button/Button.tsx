'use client'

import type { UseButton } from './useButton'
import { useButton } from './useButton'

export interface ButtonProps extends UseButton {}

const Button = (props: ButtonProps) => {
  const {
    state: { buttonProps }
  } = useButton(props)

  return <button {...buttonProps}>{props.children}</button>
}

export default Button
