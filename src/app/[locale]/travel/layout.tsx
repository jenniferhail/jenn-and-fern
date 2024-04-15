import 'normalize.css'
import '../../../../styles/globals.scss'
import '../../../../styles/fonts.css'
import s from './layout.module.scss'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { locales } from '@/navigation'
import NavVertical from '@/components/NavVertical/NavVertical'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Travel - Jenn & Fern',
  description: 'We’re getting married!',
}

export default function TravelLayout({
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
