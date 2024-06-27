import classNames from 'classnames'
import { format, isSameDay } from 'date-fns'

import { useCalendarContext } from '../CalendarContext'

const Days = () => {
  const {
    state: { daysInMonth, startingDayIndex, selectedDate },
    functions: { onSetDate }
  } = useCalendarContext()

  return (
    <div className="mt-4 grid grid-cols-7 px-5">
      {Array.from({ length: startingDayIndex - 1 }).map((_, index) => (
        <div key={`empty-${index}`} />
      ))}

      {daysInMonth.map((day, index) => (
        <div
          className={classNames(
            'relative py-2 flex items-center justify-center cursor-pointer transition-colors',
            isSameDay(selectedDate, day) &&
              'after:absolute after:rounded-full after:size-8 after:bg-blue text-white after:z-minus'
          )}
          role="button"
          key={index}
          onClick={() => onSetDate(day)}
        >
          <p className="text-center text-sm font-semibold">
            {format(day, 'd')}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Days
