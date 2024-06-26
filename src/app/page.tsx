'use client'

import { useState } from 'react'

import { Button } from '~/ui/button'

const Home = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <div className="flex gap-4">
      <Button onClick={() => console.log('click')} disabled={isDisabled}>
        Checkout
      </Button>
      <Button color="white" onClick={() => setIsDisabled(prev => !prev)}>
        Checkout
      </Button>
    </div>
  )
}

export default Home
