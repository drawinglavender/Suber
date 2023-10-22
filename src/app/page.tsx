'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'

import db from '@/lib/dbAnon'
import FeedCard from '@/components/FeedCard'
import Listing from '@/types/listing'

const Page = () => {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getAndSetListings = async () => {
      const listings = await db
        .from('listings')
        .select('*')
        .gt('leaveTime', new Date().getTime())

        setLoading(false)
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

  if (listings.length === 0 && !loading) {
    return (<div className='w-full flex justify-center font-bold text-2xl'>No listings available...</div>)
  }

  if (loading) {
    return (<div className='w-full flex justify-center font-bold text-2xl'>Loading...</div>)
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
