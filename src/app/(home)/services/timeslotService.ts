import type { BackResponse } from '~/models/GlobalModel'
import { request } from '~/utils/request'

import type { TimeslotsModel } from '../models/TimeslotsModel'

export const getTimeslots = async (
  date: Date
): Promise<BackResponse<TimeslotsModel>> => {
  try {
    return await request<TimeslotsModel>('/timeslots', {
      data: { date },
      method: 'POST',
      next: {
        cache: 'no-store'
      }
    })
  } catch (error) {
    return {
      error: true,
      response: {
        timeslots: []
      }
    }
  }
}
