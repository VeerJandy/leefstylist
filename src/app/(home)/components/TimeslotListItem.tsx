import classNames from 'classnames'

import type { TimeslotTime } from '../models/TimeslotsModel'

interface TimeslotListItemProps {
  timeslot: TimeslotTime
  onSetActiveTimeslot: (timeslot: TimeslotTime) => void
  isActive: boolean
}

const TimeslotListItem = ({
  timeslot,
  onSetActiveTimeslot,
  isActive
}: TimeslotListItemProps) => (
  <li
    className={classNames(
      'select-none flex items-center gap-2 rounded-medium border border-light px-4 py-3 transition-colors active:scale-[0.97]',
      isActive ? 'bg-dark text-white' : 'hover:bg-light'
    )}
    role="button"
    onClick={() => onSetActiveTimeslot(timeslot)}
  >
    <span className="text-sm font-semibold">{timeslot.startTime}</span>
    <span
      className={classNames(
        'flex-1 text-sm',
        isActive ? 'text-white' : 'text-gray-3'
      )}
    >
      {timeslot.duration}
    </span>
    <span className="text-sm font-semibold">
      {timeslot.price.currency}
      {timeslot.price.price}
    </span>
  </li>
)

export default TimeslotListItem
