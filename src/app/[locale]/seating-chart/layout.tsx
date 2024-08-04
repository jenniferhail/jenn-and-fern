import 'normalize.css'
import '../../../../styles/globals.scss'
import '../../../../styles/fonts.css'
import s from './layout.module.scss'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { locales } from '@/navigation'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Find Your Seat - Jenn & Fern',
  description: 'Let’s party!',
}

export default function ScheduleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <main className={s.main}>{children}</main>
    </>
  )
}
