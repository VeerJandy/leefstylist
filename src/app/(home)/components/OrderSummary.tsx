import { Button } from '~/ui/button'
import IconArrowBottom from '~/ui/icons/IconArrowBottom'

import type { TimeslotTime } from '../models/TimeslotsModel'

interface OrderSummaryProps {
  title: string
  timeslot: TimeslotTime | null
}

const OrderSummary = ({ title, timeslot }: OrderSummaryProps) => (
  <div className="bg-white/80 fixed bottom-0 w-full border-t border-light py-3 backdrop-blur-lg backdrop-saturate-[180%]">
    <div className="container flex items-center justify-between">
      <div>
        <p className="flex items-center gap-2 font-semibold">
          {title} <IconArrowBottom size="16" />
        </p>
        <p className="text-sm font-semibold text-gray-4">
          {timeslot
            ? `${timeslot.price.currency} ${timeslot.price.price}`
            : '-'}
        </p>
      </div>
      <Button>Checkout</Button>
    </div>
  </div>
)

export default OrderSummary
