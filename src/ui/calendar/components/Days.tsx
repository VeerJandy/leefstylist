import classNames from 'classnames'
import { format, isSameDay } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'

import { daysVariants } from '../calendarAnimate'
import { useCalendarContext } from '../CalendarContext'
import Slider from './Slider'

const Days = () => {
  const {
    state: {
      daysInMonth,
      startingDayIndex,
      selectedDate,
      isShowWeeks,
      currentDate
    },
    functions: { onSetDate, onSetWeek, onSetMonth }
  } = useCalendarContext()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isShowWeeks ? 'week' : 'month'}
        {...daysVariants}
        className="overflow-hidden"
      >
        <Slider
          cbNext={() =>
            isShowWeeks ? onSetWeek(currentDate, 1) : onSetMonth(currentDate, 1)
          }
          cbPrev={() =>
            isShowWeeks
              ? onSetWeek(currentDate, -1)
              : onSetMonth(currentDate, -1)
          }
        >
          <div className="grid grid-cols-7 px-5 py-4">
            {Array.from({ length: startingDayIndex - 1 }).map((_, index) => (
              <div key={`empty-${index}`} />
            ))}

            {daysInMonth.map(({ day, isDisabled, isActive }, index) => (
              <div
                className={classNames(
                  'relative py-2 flex items-center justify-center transition-colors',
                  isSameDay(selectedDate, day) &&
                    'after:absolute after:rounded-full after:size-8 after:bg-blue text-white after:z-minus'
                )}
                role="button"
                key={index}
                onClick={() => !isDisabled && onSetDate(day)}
              >
                <p
                  className={classNames(
                    'text-center text-sm font-semibold',
                    isDisabled && 'text-gray-2'
                  )}
                >
                  {format(day, 'd')}
                </p>
                {isActive && (
                  <span className="absolute bottom-0.5 size-1 rounded-full bg-blue" />
                )}
              </div>
            ))}
          </div>
        </Slider>
      </motion.div>
    </AnimatePresence>
  )
}

export default Days
