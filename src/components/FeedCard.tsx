import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Listing from '@/types/listing'

const FeedCard = ({ listing } : {listing: Listing}) => {
  return (
    <div className='flex justify-center mt-8'>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{listing.location}</CardTitle>
        <CardDescription>For rides out of Burnaby Campus 
        </CardDescription>
      </CardHeader>
      <CardContent>

      <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>_DriverName_</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Seats Available:</Label>
              <Label>{listing.seatsAvailable}</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Leaving at:</Label>
              <Label>{ listing.leavingTime }</Label>
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Driver rating:</Label>
              <Label>{ listing.driverRating }</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Book Ride</Button>
      </CardFooter>
    </Card>

      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
    </div>
  )
}

export default FeedCard