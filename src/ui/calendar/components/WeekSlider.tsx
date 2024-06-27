import classNames from 'classnames'

import IconArrowLeft from '~/ui/icons/IconArrowLeft'
import IconArrowRight from '~/ui/icons/IconArrowRight'

import { WeekDays } from '../CalendarConst'
import { iconWrapperClassname } from '../CalendarConst'
import { useCalendarContext } from '../CalendarContext'

const WeekSlider = () => {
  const {
    state: { isShowWeeks, currentDate },
    functions: { onSetWeek }
  } = useCalendarContext()

  return (
    <div className="mt-4 flex items-center gap-2 border-b border-light pb-2">
      <span
        className={classNames(
          iconWrapperClassname,
          !isShowWeeks && 'opacity-0'
        )}
        onClick={() => onSetWeek(currentDate, -1)}
      >
        <IconArrowLeft size="14" />
      </span>
      <p className="grid flex-1 grid-cols-7">
        {WeekDays.map(day => (
          <span
            key={day}
            className="text-center text-xs font-semibold text-gray-2"
          >
            {day}
          </span>
        ))}
      </p>
      <span
        className={classNames(
          iconWrapperClassname,
          !isShowWeeks && 'opacity-0'
        )}
        onClick={() => onSetWeek(currentDate, 1)}
      >
        <IconArrowRight size="14" />
      </span>
    </div>
  )
}

export default WeekSlider
