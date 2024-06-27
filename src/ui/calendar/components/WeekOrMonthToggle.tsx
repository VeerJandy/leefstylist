import { motion } from 'framer-motion'

import { useCalendarContext } from '../CalendarContext'

const tabs = [
  {
    name: 'Week',
    isShowWeeks: true
  },
  {
    name: 'Month',
    isShowWeeks: false
  }
]

const WeekOrMonthToggle = () => {
  const {
    state: { isShowWeeks },
    functions: { toggleIsShowWeeks }
  } = useCalendarContext()

  return (
    <div className="grid grid-cols-2 rounded-full bg-gray-1 p-0.5">
      {tabs.map(tab => (
        <div
          key={tab.name}
          className="relative cursor-pointer py-1.5 text-center text-xs font-semibold"
          onClick={() => toggleIsShowWeeks(tab.isShowWeeks)}
        >
          <p className="relative z-one">{tab.name}</p>
          {tab.isShowWeeks === isShowWeeks && (
            <motion.div
              layoutId="active-bg"
              className="absolute inset-0.5 rounded-full bg-white"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default WeekOrMonthToggle
