import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { ComponentPropsWithoutRef, ReactNode, useState } from 'react'

interface SliderProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
  cbPrev?: (args?: unknown) => unknown | Promise<unknown>
  cbNext?: (args?: unknown) => unknown | Promise<unknown>
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity

const Slider = ({ children, cbPrev, cbNext, ...otherProps }: SliderProps) => {
  const [[page, direction], setPage] = useState([0, 0])
  const paginate = async (newDirection: number) => {
    setPage([page + newDirection, newDirection])
    newDirection === 1 ? cbNext?.() : cbPrev?.()
  }

  return (
    <div
      {...otherProps}
      className={classNames('overflow-hidden', otherProps.className)}
    >
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          transition={{ delay: 0, duration: 0.1 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            paginate(swipe < -swipeConfidenceThreshold ? 1 : -1)
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Slider
