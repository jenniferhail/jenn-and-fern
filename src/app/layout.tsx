import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/globals.scss'
import '../../styles/fonts.css'
import s from './layout.module.scss'
import cn from 'classnames'
// import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={cn(inter.className)}>
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
