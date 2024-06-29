import { motion } from 'framer-motion'
import { ForwardedRef, forwardRef, useState } from 'react'

import { variants } from '~/consts/animate'

import type { DateTimeslots, TimeslotTime } from '../models/TimeslotsModel'
import OrderSummary from './OrderSummary'
import TimeslotListItem from './TimeslotListItem'

interface TimeslotListProps {
  timeslots: DateTimeslots
}

const TimeslotList = forwardRef(
  ({ timeslots }: TimeslotListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [activeTimeslot, setActiveTimeslot] = useState<TimeslotTime | null>(
      null
    )

    const onSetActiveTimeslot = (timeslot: TimeslotTime) => {
      setActiveTimeslot(prev => {
        if (prev && prev.id === timeslot.id) return null
        return timeslot
      })
    }

    return (
      <motion.section ref={ref} {...variants.opacity} className="pb-12">
        <ul className="scroll-bar container flex max-h-80 flex-col gap-3 overflow-scroll">
          {timeslots.times.map(timeslot => (
            <TimeslotListItem
              timeslot={timeslot}
              key={timeslot.id}
              onSetActiveTimeslot={onSetActiveTimeslot}
              isActive={
                activeTimeslot ? timeslot.id === activeTimeslot.id : false
              }
            />
          ))}
        </ul>
        <OrderSummary
          timeslot={activeTimeslot}
          title={timeslots?.title ?? ''}
        />
      </motion.section>
    )
  }
)

export default TimeslotList
