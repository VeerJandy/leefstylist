export interface Price {
  price: number
  currency: string
}

export interface TimeslotTime {
  id: string
  startTime: string
  duration: string
  price: Price
}

export interface DateTimeslots {
  id: string
  day: string
  title: string
  times: TimeslotTime[]
}
