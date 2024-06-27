import { getEvents } from '../services/eventsService'
import Home from './Home'

const MainPage = async () => {
  const events = await getEvents()

  return <Home events={events.response} />
}

export default MainPage
