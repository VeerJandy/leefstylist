export async function GET() {
  const data = {
    response: [
      '2024-06-21',
      '2024-06-24',
      '2024-06-25',
      '2024-06-26',
      '2024-06-27',
      '2024-06-28'
    ],
    error: false
  }

  return Response.json(data)
}
