import { format } from 'date-fns'

import type { DateTimeslots } from '~/app/(home)'
import type { BackResponse } from '~/models/GlobalModel'
import { request } from '~/utils/request'

export const getTimeslots = async (
  date: Date
): Promise<BackResponse<DateTimeslots | null>> => {
  try {
    return await request<DateTimeslots | null>('/timeslots', {
      data: { date: format(date, 'yyyy-MM-dd') },
      method: 'POST',
      next: {
        cache: 'no-store'
      }
    })
  } catch (error) {
    return {
      error: true,
      response: null
    }
  }
}
