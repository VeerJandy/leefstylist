export async function GET() {
  const dates = [
    '2024-06-21',
    '2024-06-25',
    '2024-06-26',
    '2024-06-28',
    '2024-06-29',
    '2024-06-30',
    '2024-07-01',
    '2024-07-03',
    '2024-07-04',
    '2024-07-05',
    '2024-07-07',
    '2024-07-10',
    '2024-07-11',
    '2024-07-15',
    '2024-07-16',
    '2024-07-18',
    '2024-07-19',
    '2024-07-20'
  ]

  return Response.json({
    response: dates,
    error: false
  })
}
