import { NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs'

import db from '@/lib/dbService'

export const POST = async (req: Request) => {
  const body = await req.json()
  const { userId } = auth()
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const user = await currentUser()

  // Perform your Route Handler's logic
  try {
    const { error } = await db.from('listings').insert({
      userID: userId,
      userName: user?.username,
      userImage: user?.imageUrl,
      seats: body.seats,
      leaveTime: new Date().getTime() + parseInt(body.leaveTime) * 1000 * 60,
      location: body.location
    })
    if (error) {
      console.error(error)
      return new NextResponse('Server Error', { status: 500 })
    }

    return new NextResponse('OK')
  } catch (err) {
    console.error(err)
    return new NextResponse('Server Error', { status: 500 })
  }
}
