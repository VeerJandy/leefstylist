import classNames from 'classnames'
import { format } from 'date-fns'

import IconArrowLeft from '~/ui/icons/IconArrowLeft'
import IconArrowRight from '~/ui/icons/IconArrowRight'

import { iconWrapperClassname } from '../CalendarConst'
import { useCalendarContext } from '../CalendarContext'

const MonthSlider = () => {
  const {
    state: { isShowWeeks, currentDate },
    functions: { onSetMonth }
  } = useCalendarContext()

  return (
    <div className="mt-4 flex items-center gap-2">
      <span
        className={classNames(iconWrapperClassname, isShowWeeks && 'opacity-0')}
        onClick={() => onSetMonth(currentDate, -1)}
      >
        <IconArrowLeft size="14" />
      </span>
      <p className="flex-1 text-center font-semibold">
        {format(currentDate, 'MMMM')}
      </p>
      <span
        className={classNames(iconWrapperClassname, isShowWeeks && 'opacity-0')}
        onClick={() => onSetMonth(currentDate, 1)}
      >
        <IconArrowRight size="14" />
      </span>
    </div>
  )
}

export default MonthSlider
