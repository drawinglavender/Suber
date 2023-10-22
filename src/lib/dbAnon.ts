import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
if (!supabaseUrl) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')

const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabasePublicKey)
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')

const supabase = createClient(supabaseUrl, supabasePublicKey)

export default supabase
