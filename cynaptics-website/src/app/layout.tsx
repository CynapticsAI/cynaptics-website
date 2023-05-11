import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Cynaptics Club - IIT Indore',
  description: 'The Cynaptics Club(AI/ML) - IIT INDORE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className=''>
        {children}
        </div>
      </body>
    </html>
  )
}
