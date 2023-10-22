import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Listing from '@/types/listing'

const FeedCard = ({ listing }: { listing: Listing }) => {
  const [leavingIn, setLeavingIn] = useState<string>('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const leaving = new Date(listing.leaveTime)
      const diff = leaving.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      const seconds = Math.floor((diff / 1000) % 60)

      if (hours > 0) setLeavingIn(`${hours}h ${minutes}m`)

      setLeavingIn(`${minutes}m ${seconds}s`)
    }, 1000)
    return () => clearInterval(interval)
  }, [listing.leaveTime])

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className='flex justify-center mt-8'>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle>
              <div className='flex justify-between'>
                <div>
                  {listing.location}
                  <div className='text-sm font-normal'>
                    {listing.seats} seats available
                  </div>
                </div>
                <div>
                  <Image
                    className='rounded-xl'
                    height={40}
                    src={listing.userImage ?? ''}
                    alt='profilepicture'
                    width={40}
                  ></Image>
                </div>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className='bg-blue-300 rounded-full py-1 px-3 w-fit'>
              {leavingIn}
            </div>
          </CardContent>

          <CardFooter className='flex justify-between'>
            <Button variant='outline' onClick={() => {
              navigator.clipboard.writeText(`https://suber.vercel.app/listing/${listing.id}`)
              toast('Link copied!')
            }}>Share</Button>
            <Button onClick={() => toast.success('Reservation confirmed!')}>Reserve</Button>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  )
}

export default FeedCard
