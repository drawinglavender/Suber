'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

const Page = () => {
  const [sliderValue, setSliderValue] = useState(2.5)
  return (
    <div>
      <h2 className={`mb-3 text-2xl font-semibold`}>User Ratings </h2>

      <p>How would you like to rate your driver/passenger "driver name"</p>

      <Slider defaultValue={[2.5]} max={5} step={1} />

      <Button variant='outline'>Submit</Button>
    </div>
  )
}

export default Page
