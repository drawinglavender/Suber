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

const mapurl1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20836.76480109206!2d-123.20153037494593!3d49.24615594682561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486737b8a3b2567%3A0xc575b1f6ee4dcc08!2sArbutus%20Ridge%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697932337982!5m2!1sen!2sca";
const mapurl2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10411.195364054218!2d-123.12807927481644!3d49.280208792276525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f41ba2fb1%3A0xc6952794560a44aa!2sDowntown%20Vancouver%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697932468083!5m2!1sen!2sca";
const mapurl3 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20835.166209163!2d-123.22416227485752!3d49.249943946955035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673106b5b4e9f%3A0x699193e63420c2ee!2sDunbar-Southlands%2C%20Vancouver%2C%20BC%20V6S%201M6!5e0!3m2!1sen!2sca!4v1697934422071!5m2!1sen!2sca";
const mapurl4 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10414.222969356855!2d-123.14065462482876!3d49.26586584224207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673c449cd8313%3A0x4f0d457ec1e53cde!2sFairview%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697934528996!5m2!1sen!2sca";
const mapurl5 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20823.701316716113!2d-123.087592533883!3d49.27710466906124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486713e7996331f%3A0x2742e6c6e35a0532!2sGrandview-Woodland%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697934610781!5m2!1sen!2sca";
const mapurl6 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20823.313756370106!2d-123.06056393387979!3d49.27802261907009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867127037b79f1%3A0xd78832db79a98e4c!2sHastings-Sunrise%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697934732132!5m2!1sen!2sca";
const mapurl7 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20836.199154768772!2d-123.09418358398506!3d49.24749631877757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676a982eb9ad3%3A0xa5a4bb0f7a5f0174!2sKensington-Cedar%20Cottage%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697934907660!5m2!1sen!2sca";
const mapurl8 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20847.714574396246!2d-123.18066863407914!3d49.22020371851779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486736554b16e53%3A0x7146b9c33aa5679d!2sKerrisdale%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697932026225!5m2!1sen!2sca";
const mapurl9 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20848.718340945466!2d-123.06054568408729!3d49.21782416849524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486742cb810debb%3A0x175de9e2932ccbda!2sKillarney%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697935143895!5m2!1sen!2sca";
const mapurl10 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20827.430691702277!2d-123.18304948391348!3d49.26827086897639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673b2ef1fa969%3A0x175052fe1e12bb28!2sKitsilano%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697935209602!5m2!1sen!2sca";
const mapurl11 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20827.430691702277!2d-123.18304948391348!3d49.26827086897639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674edf558378d%3A0x1f5351dd35c69b70!2sMarpole%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697935267570!5m2!1sen!2sca";
const mapurl12 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20852.14837329411!2d-123.14847278411538!3d49.2096922184182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486715ee079ae23%3A0xc0bfb48f226fe506!2sMount%20Pleasant%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697935524547!5m2!1sen!2sca";
const mapurl13 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10422.627950285807!2d-123.13318707486299!3d49.226031942147024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867464ee151bf9%3A0xd3a125f11165071a!2sOakridge%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697935600240!5m2!1sen!2sca";
const mapurl14 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20835.66906144235!2d-123.06178498398074!3d49.24875241878956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676b89bf066ef%3A0x43ce931afabe76a2!2sRenfrew-Collingwood%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697935652350!5m2!1sen!2sca";
const mapurl15 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20837.2893996268!2d-123.124701283994!3d49.244912818752915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f5ace841af%3A0x4905a975ac7cde8!2sRiley%20Park%E2%80%93Little%20Mountain%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697935725132!5m2!1sen!2sca";
const mapurl16 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20836.84678684493!2d-123.16190708399034!3d49.24596166876289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486739749e15549%3A0x76157d06d0961c60!2sShaughnessy%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697935808157!5m2!1sen!2sca";
const mapurl17 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20837.10344698321!2d-123.14218023399246!3d49.24535346875711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486738956cdcd6f%3A0x9616c9ae3ad5fea6!2sSouth%20Cambie%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697935912674!5m2!1sen!2sca";
const mapurl18 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10412.857266729296!2d-123.09994357482316!3d49.2723360922576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486716ea198f309%3A0x8798d571740a7a84!2sStrathcona%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697936003495!5m2!1sen!2sca";
const mapurl19 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20848.21792802642!2d-123.11252168408326!3d49.21901046850649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674440ffc217b%3A0x57121c0cd3f1dd1c!2sSunset%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697936159146!5m2!1sen!2sca";
const mapurl20 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20848.25300320113!2d-123.08373438408351!3d49.21892731850568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486742c49c3d455%3A0xbc58ca8262fe3f90!2sVictoria-Fraserview%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697936220985!5m2!1sen!2sca";
const mapurl21 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10410.153732792294!2d-123.14418557481218!3d49.28514269228838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486722983fd3f63%3A0x1793ee2a33d8acda!2sWest%20End%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697936280856!5m2!1sen!2sca";
const mapurl22 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20827.324205910918!2d-123.2249597839126!3d49.26852311897883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672f004d11a77%3A0x509925f32f8f0d04!2sWest%20Point%20Grey%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1697936354959!5m2!1sen!2sca"

export const locationMap = {
  'Arbutus Ridge' : mapurl1,
  'Downtown' : mapurl2,
  'Dunbar-Southlands' : mapurl3,
  'Fairview' : mapurl4,
  'Grandview-Woodland' : mapurl5,
  'Hastings-Sunrise' : mapurl6,
  'Kensington-Cedar Cottage' : mapurl7,
  'Kerrisdale' : mapurl8,
  'Killarney' : mapurl9,
  'Kitsilano' : mapurl10,
  'Marpole' : mapurl11,
  'Mount Pleasant' : mapurl12,
  'Oakridge' : mapurl13,
  'Renfrew-Collingwood' : mapurl14,
  'Riley Park' : mapurl5,
  'Shaughnessy' : mapurl6,
  'South Cambie' : mapurl7,
  'Strathcona' : mapurl8,
  'Sunset' : mapurl9,
  'Victoria-Fraserview' : mapurl20,
  'West End' : mapurl21,
  'West Point Grey' : mapurl22
}

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
          <Button type='submit' onClick={handleSubmit}>Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}