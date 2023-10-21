interface Listing {
  id: number
  created_at: string
  userID: string
  userName: string
  userImage: string | null
  seatsAvailable: number
  leavingTime: number
  location: string
  driverRating: number
}

export default Listing