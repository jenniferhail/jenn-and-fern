import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/globals.scss'
import '../../styles/fonts.css'
import s from './layout.module.scss'
import cn from 'classnames'
import localFont from 'next/font/local'
// import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const bellissima = localFont({
  src: [
    { path: '../../public/fonts/Bellissima.woff2' },
    { path: '../../public/fonts/Bellissima.woff' },
    { path: '../../public/fonts/Bellissima.ttf' },
  ],
  display: 'swap',
  weight: 'normal',
})

export const metadata: Metadata = {
  title: 'Jenn & Fern',
  description: 'We’re getting married!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, bellissima.className)}>
        <main className={s.main}>
          {/* <div className={s.language}>
            <Link href="/">EN</Link> • <Link href="/es">ES</Link>
          </div> */}
          {children}
        </main>
      </body>
    </html>
  )
}
