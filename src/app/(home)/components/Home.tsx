'use client'

import { Calendar } from '~/ui/calendar'

import TimeslotList from './TimeslotList'

const Home = () => {
  // active days []
  const cb = (date: Date) => console.log('callback', date)

  return (
    <>
      <section className="container mt-20">
        <Calendar onSetCurrentDateCallback={cb} />
      </section>
      <TimeslotList />
    </>
  )
}

export default Home
