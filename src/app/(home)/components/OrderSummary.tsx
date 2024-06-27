import { Button } from '~/ui/button'
import IconArrowBottom from '~/ui/icons/IconArrowBottom'

const OrderSummary = () => (
  <section className="fixed bottom-0 w-full border-t border-light py-3">
    <div className="container flex items-center justify-between">
      <div>
        <p className="flex items-center gap-2 font-semibold">
          Intakegesprek <IconArrowBottom size="16" />
        </p>
        <p className="text-sm font-semibold text-gray-4">€80</p>
      </div>
      <Button>Checkout</Button>
    </div>
  </section>
)

export default OrderSummary
