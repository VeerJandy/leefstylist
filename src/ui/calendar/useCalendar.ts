import {
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  isSameDay,
  lastDayOfWeek,
  startOfMonth,
  startOfWeek
} from 'date-fns'
import { useMemo, useState } from 'react'

import { useToggle } from '~/hooks/useToggle'

export interface UseCalendar {
  activeDays?: string[]
  isDisabledNotActiveDays?: boolean
  onSetCurrentDateCallback?: (date: Date) => Promise<unknown> | unknown
}

export const useCalendar = ({
  onSetCurrentDateCallback,
  activeDays,
  isDisabledNotActiveDays
}: UseCalendar) => {
  const [isShowWeeks, toggleIsShowWeeks] = useToggle([true, false])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const firstDayOfMonth = startOfMonth(currentDate)
  const lastDayOfMonth = endOfMonth(currentDate)
  const firstDayOfWeek = startOfWeek(currentDate, { weekStartsOn: 1 })
  const endOfWeek = lastDayOfWeek(currentDate, { weekStartsOn: 1 })

  const daysInMonth = useMemo(() => {
    const days = eachDayOfInterval({
      start: isShowWeeks ? firstDayOfWeek : firstDayOfMonth,
      end: isShowWeeks ? endOfWeek : lastDayOfMonth
    })
    return days.map(day => {
      const isSomeDay = activeDays?.some(date => isSameDay(day, new Date(date)))
      return {
        day,
        isActive: isSomeDay,
        isDisabled: isDisabledNotActiveDays && !isSomeDay
      }
    })
  }, [isShowWeeks, firstDayOfMonth, lastDayOfMonth, firstDayOfWeek, endOfWeek])

  const startingDayIndex = getDay(
    isShowWeeks ? firstDayOfWeek : firstDayOfMonth
  )

  const onSetDate = async (date: Date) => {
    if (isSameDay(selectedDate, date)) return

    setCurrentDate(() => date)
    setSelectedDate(() => date)
    if (onSetCurrentDateCallback) await onSetCurrentDateCallback(date)
  }

  const onSetMonth = (date: Date, number: number) => {
    setCurrentDate(() => addMonths(date, number))
  }
  const onSetWeek = (date: Date, number: number) => {
    setCurrentDate(() => addWeeks(date, number))
  }

  return {
    state: {
      selectedDate,
      isShowWeeks,
      daysInMonth,
      startingDayIndex,
      currentDate
    },
    functions: { toggleIsShowWeeks, onSetDate, onSetMonth, onSetWeek }
  }
}

export type useCalendarReturn = ReturnType<typeof useCalendar>
