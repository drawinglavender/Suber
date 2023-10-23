import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

import 'dotenv/config'

import { CronJob } from 'cron'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
if (!supabaseUrl) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')

const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseServiceKey) throw new Error('Missing env.SUPABASE_SERVICE_KEY')

const db = createClient(supabaseUrl, supabaseServiceKey)

const callApiWithFakeData = async () => {
  const timeOptions = [10, 15, 20, 25, 30]
  const locationOptions = [
    'Arbutus Ridge',
    'Downtown',
    'Dunbar-Southlands',
    'Fairview',
    'Grandview-Woodland',
    'Hastings-Sunrise',
    'Kensington-Cedar Cottage',
    'Kerrisdale',
    'Killarney',
    'Kitsilano',
    'Marpole',
    'Mount Pleasant',
    'Oakridge',
    'Renfrew-Collingwood',
    'Riley Park',
    'Shaughnessy',
    'South Cambie',
    'Strathcona',
    'Sunset',
    'Victoria-Fraserview',
    'West End',
    'West Point Grey'
  ]

  try {
    const data = {
      userID: faker.string.uuid(),
      userName: null,
      userImage:
        'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWDVyNGtKbHBkZVYwYmt0YjIzdTZpNXFHT0QifQ?width=160',
      seats: Math.floor(Math.random() * 10) + 1,
      leaveTime:
        new Date().getTime() +
        timeOptions[Math.floor(Math.random() * timeOptions.length)] * 1000 * 60,
      location:
        locationOptions[Math.floor(Math.random() * locationOptions.length)]
    }
    const { error } = await db.from('listings').insert(data)

    if (error) {
      console.error(error)
    }

    console.log(new Date(), 'OK', data)
  } catch (error) {
    console.error('Error calling API:', error)
  }
}

new CronJob('*/5 * * * *', callApiWithFakeData, null, true)
