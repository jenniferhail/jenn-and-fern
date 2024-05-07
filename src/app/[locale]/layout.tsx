import 'normalize.css'
import '../../../styles/globals.scss'
import '../../../styles/fonts.css'
import s from './layout.module.scss'
import { unstable_setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocaleButton from '@/components/LocaleButton/LocaleButton'
import { Link, locales } from '@/navigation'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import NavVertical from '@/components/NavVertical/NavVertical'

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
  const t = useTranslations('Global')

  const navItems = [
    { label: t('home'), link: '/' },
    { label: t('schedule'), link: '/schedule' },
    { label: t('travel'), link: '/travel' },
    { label: t('things'), link: '/things-to-do' },
    { label: t('our_story'), link: '/our-story' },
    { label: t('faqs'), link: '/faqs' },
    { label: t('registry'), link: '/registry' },
    { label: t('save_the_date'), link: '/save-the-date' },
    {
      label: t('rsvp'),
      link: 'http://rsvp.jennandfern.com/',
      target: '_blank',
    },
  ]

  return (
    <html lang={locale}>
      <body className={cn(s.body, inter.className)}>
        <NavVertical links={navItems} />
        <div className={s.right}>
          <Link
            className={s.rsvp}
            href="http://rsvp.jennandfern.com/"
            target="_blank"
          >
            RSVP
          </Link>{' '}
          <span>{t('by')} 07.01.24</span>
        </div>
        {children}
        <footer className={s.footer}>
          <span>Villavicencio</span>
          <div className={s.credit}>
            <p>
              {t('made')}
              <Link
                className={s.bride}
                href="https://jenhail.com"
                target="_blank"
              >
                {t('bride')}
              </Link>
              {t('translated')}
              <Link
                className={s.groom}
                href="https://www.instagram.com/nandov88/"
                target="_blank"
              >
                {t('groom')}
              </Link>{' '}
              {t('supervised')}
              <Link
                className={s.cat}
                href="https://www.instagram.com/theo_turkish_angora/"
                target="_blank"
              >
                {t('cat')}
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
