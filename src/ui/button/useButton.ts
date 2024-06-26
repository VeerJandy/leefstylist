import classNames from 'classnames'
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from 'react'
import { useCallback, useMemo } from 'react'

import type { ButtonVariants } from './button.style'
import { buttonStyle } from './button.style'

export type UseButton = ButtonVariants &
  ComponentPropsWithoutRef<'button'> & {
    children?: ReactNode
  }

export const useButton = (props: UseButton) => {
  const { type, className, onClick, disabled } = props

  const onClickHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (disabled) return
      onClick?.(event)
    },
    [onClick, disabled]
  )

  const buttonProps = useMemo(
    () => ({
      ...props,
      type: type ?? 'button',
      className: classNames(buttonStyle(props), className),
      onClick: onClickHandler
    }),
    [disabled, className]
  )

  return {
    state: { buttonProps }
  }
}
