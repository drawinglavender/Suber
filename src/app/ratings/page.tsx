'use client'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {useState} from 'react'


const Page = () => {
    const [sliderValue, setSliderValue] = useState(2.5)
  return (
    <div>
      <h2 className={`mb-3 text-2xl font-semibold`}>
            User Ratings{' '}
            Value = {sliderValue}
          </h2>

        <p>
            How would you like to rate your driver/passenger "name"
            </p>    

      <Slider defaultValue={[sliderValue]} max={5} step={0.5} onValueCommit={(value)=> {setSliderValue(value)}}/>
        
      <Button variant="outline" onClick={() => {
        console.log(sliderValue)
      }}>Submit</Button>


    </div>

  )
}

export default Page