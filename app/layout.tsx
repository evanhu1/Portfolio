import './globals.css'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const font = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Evan Hu',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className + " "}>
        <div className="">
          <Analytics />
          {children}
        </div>
      </body>
    </html>
  )
}
