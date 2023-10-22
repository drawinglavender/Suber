'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'

import db from '@/lib/dbAnon'
import FeedCard from '@/components/FeedCard'
import Listing from '@/types/listing'

const Page = () => {
  const [listings, setListings] = useState<Listing[]>([])

  useEffect(() => {
    const getAndSetListings = async () => {
      const listings = await db.from('listings').select('*')
        .gt('leaveTime', new Date().getTime())
      
      if (listings.error) {
        return
      }

      setListings(listings.data.reverse())
    }

    getAndSetListings()

    db.channel('listings').on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'listings' },
      (payload) => {
        // @ts-ignore
        setListings((listings) => [payload.new, ...listings])
      }
    )
  })

  if (listings.length === 0) {
    return <div className=''>No listings</div>
  }

  return (
    <div className=''>
      {listings.map((listing) => (
        <FeedCard key={listing.id} listing={listing} />
      ))}
    </div>
  )
}

export default Page
