import classNames from 'classnames'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { variants } from '~/consts/animate'

const TimeslotListLoading = forwardRef(() => (
  <motion.ul {...variants.opacity} className="container flex flex-col gap-3">
    {Array.from({ length: 4 }).map((_, index) => (
      <li
        key={index}
        className={classNames(
          'flex h-11 animate-pulse items-center gap-2 rounded-medium border border-light bg-light',
          `delay-${index * 100}`
        )}
      />
    ))}
  </motion.ul>
))

export default TimeslotListLoading
