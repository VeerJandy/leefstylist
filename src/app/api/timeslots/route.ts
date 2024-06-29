import { DateTimeslots } from '~/app/(home)'

// '',
//   '2024-06-25',
//   '2024-06-26',
//   '2024-06-28',
//   '2024-06-30',
//   '2024-07-01',
//   '2024-07-03',
//   '2024-07-04',
//   '2024-07-05',
//   '2024-07-07',
//   '2024-07-10',
//   '2024-07-11',
//   '2024-07-15',
//   '2024-07-16',
//   '2024-07-18',
//   '2024-07-19',
//   '2024-07-20'

const timeslots: DateTimeslots[] = [
  {
    id: '1',
    day: '2024-06-21',
    title: 'Intakegesprek',
    times: [
      {
        id: '1',
        startTime: '10:00',
        duration: '60 min',
        price: {
          price: 80,
          currency: '€'
        }
      },
      {
        id: '2',
        startTime: '11:00',
        duration: '1 h 30 min',
        price: {
          price: 120,
          currency: '€'
        }
      }
    ]
  }
]

export async function POST(request: Request) {
  const { date } = await request.json()

  const timeslot: DateTimeslots | null =
    timeslots.find(timeslot => timeslot.day === date) ?? null

  return Response.json({
    response: timeslot,
    error: false
  })
}
