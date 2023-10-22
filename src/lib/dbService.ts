import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
if (!supabaseUrl) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')

const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseServiceKey) throw new Error('Missing env.SUPABASE_SERVICE_KEY')

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export default supabase
