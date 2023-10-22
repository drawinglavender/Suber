'use client'

import { SignInButton, SignOutButton, useAuth, UserButton } from '@clerk/nextjs'

const Header = () => {
  const { userId } = useAuth()

  return (
    <div className='flex justify-between p-6'>
      <div className='font-bold text-3xl tracking-tight text-slate-900'>Suber</div>
<div className='flex items-center gap-6'>
<div className='bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2 rounded-md'>
      {userId ? (
        
          <SignOutButton />
          ) : (
            <SignInButton />
            )}
            </div>
      <UserButton />
</div>
    </div>
  )
}

export default Header
