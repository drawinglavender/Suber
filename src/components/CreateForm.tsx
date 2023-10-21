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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export default function CreateForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
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
            <Input
              id='location'
              defaultValue='Location'
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='seats' className='text-right'>
              Seats Available
            </Label>
            <Input
              id='seats'
              type='number'
              defaultValue={1}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='seats' className='text-right'>
            Leave Time
            </Label>
            <Select>
              <SelectTrigger className='col-span-3'>
                <SelectValue placeholder='Select a time' />
              </SelectTrigger>
              
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Time</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button type='submit'>Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
