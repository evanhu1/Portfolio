import './globals.css'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'

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
        <header className="flex flex-col items-center justify-center bg-slate-800">
          <div className="flex flex-col md:mb-4 md:mt-8 md:flex-row justify-center items-center">
            <Image className="rounded-md mt-8 md:my-0 md:mx-4 w-18 h-18 md:w-28 md:h-28" width={100} height={100} src="/headshot.png" alt="portrait"></Image>
            <Image className="mb-4 w-80 m:w-100 h-18 md:m-0 md:w-auto md:h-28 brightness-[1.1] saturate-[0.7] contrast-[1.1]" width={500} height={12} src="/nameGraphic.png" alt="name"></Image>
          </div>
          <nav className="nav w-full md:w-auto flex flex-col md:flex-row md:space-x-6 text-center mb-6">
            {/* <a className="m-2 px-3 py-1 hover:text-slate-900 text-slate-100 bg-slate-900 rounded-md hover:bg-slate-50" href="#about" target="_blank">Experience</a> */}
            <a className="m-2 px-3 py-1 hover:text-slate-900 text-slate-100 bg-slate-900 rounded-md hover:bg-slate-50" href="https://docs.google.com/document/d/1BeETlLNPKBS98UL6V2_AjMVsjL1ndlwLK1tvW6Cnxrk/export?format=pdf" target="_blank">Resume</a>
            <a className="m-2 px-3 py-1 hover:text-slate-900 text-slate-100 bg-slate-900 rounded-md hover:bg-slate-50" href="https://github.com/evanhu1" target="_blank">Github</a>
            <a className="m-2 px-3 py-1 hover:text-slate-900 text-slate-100 bg-slate-900 rounded-md hover:bg-slate-50" href="https://www.linkedin.com/in/evanhu1/" target="_blank">LinkedIn</a>
          </nav>
        </header>
        <div className="bg-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}
