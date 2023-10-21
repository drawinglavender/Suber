import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Listing from '@/types/listing'

const FeedCard = ({ listing } : {listing: Listing}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{listing.location}</CardTitle>
        <CardDescription>{listing.seatsAvailable} seat{listing.seatsAvailable > 1 ? 's': ''} available. Leaving at: { listing.leavingTime }</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}

export default FeedCard