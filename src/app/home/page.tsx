'use client'

import { useUser } from '@clerk/nextjs'
import FeedCard from '@/components/FeedCard'
import Listing from '@/types/listing'
import { useState } from 'react'
import { useEffect } from 'react'

const Page = () => {
  const [listings, setListings] = useState<Listing[]>([])
  
  useEffect(() => {
    const getAndSetListings = async () => {

      const resp = await fetch('/api/listings')

      const listings = await resp.json()

      if (resp.ok) {
        setListings(listings)
      }
    }
    getAndSetListings()
  })

  if (listings.length === 0) {
    return <div className=''>No listings</div>
  }

  return <div className=''>{listings.map((listing) => <FeedCard key={listing.id} listing={listing} />)}</div>
}

export default Page
