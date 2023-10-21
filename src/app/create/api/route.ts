import { auth, currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import db from '@/lib/dbService'

export const POST = async (req: Request) => {
  const body = await req.json()
  const { userId } = auth()
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  const user = await currentUser()
  console.log(user)
  // Perform your Route Handler's logic
  try {
    db.from('listings').insert({
      userID: userId,
      userName: user?.username,
      userImage: user?.imageUrl,
      seatsAvailable: body.seatsAvailable,
      leavingTime: body.leavingTime,
      location: body.location
    })
    return new NextResponse("OK")
  } catch (err) {
    return new NextResponse("Server Error", { status: 500 })
  }
}