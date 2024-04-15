import 'normalize.css'
import '../../../../styles/globals.scss'
import '../../../../styles/fonts.css'
import s from './layout.module.scss'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocaleButton from '@/components/LocaleButton/LocaleButton'
import { locales } from '@/navigation'
import NavVertical from '@/components/NavVertical/NavVertical'
import cn from 'classnames'
const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Jenn & Fern',
  description: 'We’re getting married!',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={cn(s.body, inter.className)}>
        <NavVertical />
        <main className={s.main}>
          <div className={s.language}>
            <LocaleButton locale={locale} />
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
