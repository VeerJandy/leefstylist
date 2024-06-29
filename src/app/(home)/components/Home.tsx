'use client'

import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'

import type { DateTimeslots } from '~/app/(home)'
import { variants } from '~/consts/animate'
import { Calendar } from '~/ui/calendar'
import { delay } from '~/utils/request'

import type { EventModel } from '../models/EventModel'
import { getTimeslots } from '../services/timeslotService'
import TimeslotList from './TimeslotList'
import TimeslotListLoading from './TimeslotListLoading'

interface HomeProps {
  events: EventModel
  timeslots: DateTimeslots | null
}

const Home = ({ events, timeslots: timeslotsProps }: HomeProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [timeslots, setTimeslots] = useState<DateTimeslots | null>(
    timeslotsProps
  )

  const onGetTimeslots = useCallback(async (date: Date) => {
    setIsLoading(() => true)

    const { error, response } = await getTimeslots(date)

    // Framer Motion has a bug.
    // When the state of elements change very quickly, the library fails to update them correctly,
    // which can cause unexpected behavior on the screen.
    // There are two options depending on the business task:
    // not adding animations or adding a workaround to make it work and look nice.
    // For the test task, I decided to add this workaround.
    // In a real project, I would explain what the problem is, the possible solutions,
    // and perhaps suggest a better solution based on my opinion and the specific issue
    await delay(500)

    if (!error) setTimeslots(() => response)

    setIsLoading(() => false)
  }, [])

  return (
    <>
      <section className="container mt-20">
        <Calendar
          onSetCurrentDateCallback={onGetTimeslots}
          activeDays={events}
          isDisabledNotActiveDays
        />
      </section>
      <hr className="hr" />
      <section className="mt-4">
        <AnimatePresence mode="wait">
          {isLoading && <TimeslotListLoading key="Loading" />}
          {timeslots && !isLoading ? (
            <TimeslotList
              key={`Timeslots-${timeslots.id}`}
              timeslots={timeslots}
            />
          ) : (
            !isLoading && (
              <motion.p
                {...variants.opacity}
                key="NotFound"
                className="text-center"
              >
                Not found :(
              </motion.p>
            )
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

export default Home
