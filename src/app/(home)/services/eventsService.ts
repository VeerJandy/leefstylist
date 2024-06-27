import type { BackResponse } from '~/models/GlobalModel'
import { request } from '~/utils/request'

import type { EventModel } from '../models/EventModel'

export const getEvents = async (): Promise<BackResponse<EventModel>> => {
  try {
    return await request<EventModel>('/events', {
      data: {},
      method: 'GET',
      next: {
        cache: 'no-store'
      }
    })
  } catch (error) {
    return {
      response: [],
      error: true
    }
  }
}
