import { unstable_setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../../styles/globals.scss'
import '../../../styles/fonts.css'
import s from './layout.module.scss'
import LocaleButton from '@/components/LocaleButton/LocaleButton'
const inter = Inter({ subsets: ['latin'] })

const locales = ['en', 'de']

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
      <body className={inter.className}>
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
