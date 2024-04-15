import { Link } from '@/navigation'
import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import cn from 'classnames'
import NavVertical from '@/components/NavVertical/NavVertical'
import Image from 'next/image'

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Home')

  return (
    <>
      <NavVertical />
      <main className={s.main}>
        <div className={s.hero}>
          <h1 className="h1">
            <i>August 10, 2024</i>
          </h1>
          <span>Ann Arbor, Michigan</span>
        </div>
        <section className={s.section}>
          <h2 className={s.large}>Join us in celebration</h2>
          <h2>
            For the wedding of <br />
            Jennifer Hail & <br />
            Fernando Villavicencio
          </h2>
          <div className={s.cards}>
            <div className={cn(s.card, s.wedding)}>
              <Link href="/schedule">
                <h2>Ceremony</h2>
                5:30 p.m.
                <br />
                <span>Matthaei Botanical Gardens</span>
                <span className={s.details}>See details</span>
              </Link>
              <div className={s.img}>
                <Image
                  src="/wedding.jpg"
                  alt="Jenn & Fern smiling at a wedding"
                  width={1000}
                  height={1260}
                />
              </div>
            </div>
            <div className={cn(s.card, s.ecuador)}>
              <Link href="/schedule">
                <h2>Reception</h2>
                6:30 p.m.
                <br />
                <span>StudioStudio</span>
                <span className={s.details}>See details</span>
              </Link>
              <div className={s.img}>
                <Image
                  src="/ecuador.jpeg"
                  alt="Jenn & Fern smiling with alpacas in Ecuador"
                  width={1000}
                  height={1333}
                />
              </div>
            </div>
          </div>
          <Link
            className={cn(s.rsvp, 'button')}
            href="http://rsvp.jennandfern.com/"
            target="_blank"
          >
            RSVP by July 1st
          </Link>
        </section>
      </main>
    </>
  )
}
