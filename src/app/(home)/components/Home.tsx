'use client'

import { Calendar } from '~/ui/calendar'

import type { EventModel } from '../models/EventModel'
import { getTimeslots } from '../services/timeslotService'
import OrderSummary from './OrderSummary'
import TimeslotList from './TimeslotList'

interface HomeProps {
  events: EventModel
}

const Home = ({ events }: HomeProps) => {
  console.log('events', events)
  // active days []
  const cb = async (date: Date) => {
    await getTimeslots(date)
  }

  return (
    <>
      <section className="container mt-20">
        <Calendar onSetCurrentDateCallback={cb} activeDays={events} />
      </section>
      <hr className="hr" />
      <TimeslotList />
      <OrderSummary />
    </>
  )
}

export default Home
