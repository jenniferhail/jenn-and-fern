import 'normalize.css'
import '../../../../styles/globals.scss'
import '../../../../styles/fonts.css'
import s from './layout.module.scss'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
// import LocaleButton from '@/components/LocaleButton/LocaleButton'
import { locales } from '@/navigation'
import Nav from '@/components/Nav/Nav'
import NavVertical from '@/components/NavVertical/NavVertical'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Schedule - Jenn & Fern',
  description: 'We’re getting married!',
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
      <NavVertical />
      <main className={s.main}>{children}</main>
    </>
  )
}
