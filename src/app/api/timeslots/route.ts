export async function POST(request: Request) {
  const { date } = await request.json()
  console.log('Route api/timeslots', date)

  const data = {
    timeslots: []
  }

  return Response.json(data)
}
