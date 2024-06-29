'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import type { ComponentPropsWithoutRef, ForwardedRef } from 'react'
import { forwardRef } from 'react'

import type { SpinnerVariants } from './spinner.style'
import { spinnerStyle } from './spinner.style'

type SpinnerProps = SpinnerVariants & ComponentPropsWithoutRef<'div'>

const Spinner = forwardRef(
  (props: SpinnerProps, ref: ForwardedRef<HTMLDivElement>) => {
    const slots = spinnerStyle(props)

    return (
      <motion.div
        ref={ref}
        className={classNames('container flex justify-center', props.className)}
      >
        <div className={slots.wrapper()}>
          <i className={slots.circle1()} />
          <i className={slots.circle2()} />
        </div>
      </motion.div>
    )
  }
)

export default Spinner
