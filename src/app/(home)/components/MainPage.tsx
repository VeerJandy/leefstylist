import { startOfToday } from 'date-fns'

import { getEvents } from '../services/eventsService'
import { getTimeslots } from '../services/timeslotService'
import Home from './Home'

const MainPage = async () => {
  const events = await getEvents()
  const timeslots = await getTimeslots(startOfToday())

  return <Home events={events.response} timeslots={timeslots.response} />
}

export default MainPage
