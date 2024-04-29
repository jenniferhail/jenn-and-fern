import 'normalize.css'
import '../../../styles/globals.scss'
import '../../../styles/fonts.css'
import s from './layout.module.scss'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocaleButton from '@/components/LocaleButton/LocaleButton'
import { Link, locales } from '@/navigation'
import Nav from '@/components/Nav/Nav'
import cn from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Jenn & Fern',
  description: 'We’re getting married!',
}

export default function SaveTheDateLayout({
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
        {children}
        <footer className={s.footer}>
          <span>Villavicencio</span>
          <div className={s.credit}>
            <p>
              Website made by{' '}
              <Link
                className={s.bride}
                href="https://jenhail.com"
                target="_blank"
              >
                the bride
              </Link>
              , Translated by{' '}
              <Link
                className={s.groom}
                href="https://www.instagram.com/nandov88/"
                target="_blank"
              >
                the groom
              </Link>{' '}
              & supervised by{' '}
              <Link
                className={s.cat}
                href="https://www.instagram.com/theo_turkish_angora/"
                target="_blank"
              >
                their cat Theo
              </Link>
            </p>
          </div>
          <div className={s.language}>
            <LocaleButton locale={locale} />
          </div>
        </footer>
      </body>
    </html>
  )
}
