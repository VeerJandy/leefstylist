'use client'

import { CalendarProvider } from '../CalendarContext'
import type { UseCalendar } from '../useCalendar'
import { useCalendar } from '../useCalendar'
import Days from './Days'
import MonthSlider from './MonthSlider'
import WeekOrMonthToggle from './WeekOrMonthToggle'
import WeekSlider from './WeekSlider'

const Calendar = (props: UseCalendar) => {
  const state = useCalendar(props)

  return (
    <CalendarProvider value={state}>
      <div className="select-none">
        <WeekOrMonthToggle />
        <MonthSlider />
        <WeekSlider />
        <Days />
      </div>
    </CalendarProvider>
  )
}

export default Calendar
