'use client'

import { useUser } from '@clerk/nextjs'
import FeedCard from '@/components/FeedCard'
import Listing from '@/types/listing'

const listings: Listing[] = [
  {
    id: 1,
    created_at: 'created_at',
    userID: 'userID',
    userName: 'Joe M',
    userImage: 'userImage',
    location: 'Burnaby',
    seatsAvailable: 1,
    leavingTime: 123,
    driverRating: 5,
    
  }
]

const Page = () => {
  const { user, isLoaded } = useUser()

  if (!isLoaded) return <div>Loading...</div>
  
  return <div className=''>{listings.map((listing) => <FeedCard key={listing.id} listing={listing} />)}</div>
}

export default Page
