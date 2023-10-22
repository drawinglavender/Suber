import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import { Toaster } from 'sonner'
import { ClerkProvider } from '@clerk/nextjs'

import Header from '@/components/Header'
import { ThemeProvider } from '@/components/theme-provider'
export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Suber',
  description: 'Ride sharing for students'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
            )}
        >
            <Toaster />
          <Header />
          {children}
        </body>
        </html>
    </ClerkProvider>
  )
}
