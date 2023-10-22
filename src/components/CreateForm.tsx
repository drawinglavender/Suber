import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const neighborhoods = [
  'Arbutus Ridge',
  'Downtown',
  'Dunbar-Southlands',
  'Fairview',
  'Grandview-Woodland',
  'Hastings-Sunrise',
  'Kensington-Cedar Cottage',
  'Kerrisdale',
  'Killarney',
  'Kitsilano',
  'Marpole',
  'Mount Pleasant',
  'Oakridge',
  'Renfrew-Collingwood',
  'Riley Park',
  'Shaughnessy',
  'South Cambie',
  'Strathcona',
  'Sunset',
  'Victoria-Fraserview',
  'West End',
  'West Point Grey'
]

export default function CreateForm() {
  const [leaveTime, setLeaveTime] = useState('10')
  const [seats, setSeats] = useState(1)
  const [location, setLocation] = useState('')

  const handleSubmit = () => {
    fetch('/create/api', {
      method: 'POST',
      body: JSON.stringify({
        leaveTime,
        seats,
        location
      })
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Create Listing</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Listing</DialogTitle>
          <DialogDescription>Create a listing for carpooling</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='location' className='text-right'>
              Location
            </Label>
            <Select
              value={location}
              onValueChange={(value) => setLocation(value)}
            >
              <SelectTrigger className='col-span-3'>
                <SelectValue placeholder='Select a location' />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Location</SelectLabel>
                  <ScrollArea className='h-72 rounded-md'>
                    {neighborhoods.map((neighborhood) => (
                      <SelectItem key={neighborhood} value={neighborhood}>
                        {neighborhood}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='seats' className='text-right'>
              Seats
            </Label>
            <Input
              id='seats'
              type='number'
              value={seats}
              min={1}
              max={99}
              onChange={(e) => setSeats(parseInt(e.target.value))}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='seats' className='text-right'>
              Leaving in:
            </Label>
            <Select
              value={leaveTime}
              onValueChange={(value) => setLeaveTime(value)}
            >
              <SelectTrigger className='col-span-3'>
                <SelectValue placeholder='Select a time' />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Time</SelectLabel>
                  {[10, 15, 20, 25, 30].map((time) => (
                    <SelectItem key={time} value={time.toString()}>
                      {time + ' minutes'}{' '}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button type='submit' onClick={handleSubmit}>
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
