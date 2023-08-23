import './globals.css'
import type { Metadata } from 'next'
import Nav from './components/Nav'
import Sidenav from './components/Sidenav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Samuel Swedberg | Devsite',
  description: 'Devlog site for Samuel Swedberg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav/>
      <Sidenav/>
          <div className='mx-auto max-w-4xl px-4'>
            <div className='ml-44 w-100 '>
              {children}
            </div>
          </div>
      </body>
    </html>
  )
}
