import { createContext } from '~/utils/context'

import type { useCalendarReturn } from './useCalendar'

export const [CalendarProvider, useCalendarContext] =
  createContext<useCalendarReturn>({
    name: 'CalendarContext',
    strict: true,
    errorMessage: 'useCalendarContext: `context` is undefined'
  })
