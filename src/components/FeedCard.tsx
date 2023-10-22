import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import Listing from '@/types/listing'

const FeedCard = ({ listing }: { listing: Listing }) => {
  return (
    <div className='flex justify-center mt-8'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle><div className='flex justify-between'>{listing.location}<div><Image className='rounded-xl' height={40} src={listing.userImage ?? ''} alt='profilepicture' width={40}></Image></div></div></CardTitle>

          <CardDescription>{listing.seats} seats available</CardDescription>
        </CardHeader>

        <CardContent></CardContent>

        <CardFooter className='flex justify-between'>
          <Button variant='outline'>Share</Button>
          <Button>Reserve</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default FeedCard
