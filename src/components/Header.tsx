'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton
} from '@clerk/nextjs'

import CreateForm from '@/components/CreateForm'

const Header = () => {
  const { userId } = useAuth()

  return (
    <div className='flex justify-between p-6'>
      <div className='font-bold text-3xl tracking-tight text-slate-900'>
        Suber
      </div>
      <div className='flex items-center gap-6'>
        <SignedIn>
          <CreateForm />
        </SignedIn>
        <SignedOut>
          <div className='bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2 rounded-md'>
            <SignInButton />
          </div>
        </SignedOut>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
