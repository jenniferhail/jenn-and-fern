import { Link } from '@/navigation'
import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import cn from 'classnames'
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
      <main className={s.main}>
        <div className={s.hero}>
          <h1 className="h1">
            <i>{t('date_full')}</i>
          </h1>
          <span>
            {t('city')}, {t('state')}
          </span>
        </div>
        <section className={s.section}>
          <h2 className={s.large}>{t('large_text')}</h2>
          <h2>
            {t.rich('wedding', {
              br: () => <br />,
              i: (chunks) => <i>{chunks}</i>,
            })}
          </h2>
          <div className={s.cards}>
            <div className={cn(s.card, s.wedding)}>
              <Link href="/schedule">
                <h2>{t('ceremony_title')}</h2>
                {t('ceremony_time')}
                <br />
                <span>{t('ceremony_location')}</span>
                <span className={s.details}>{t('details')}</span>
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
                <h2>{t('reception_title')}</h2>
                {t('reception_time')}
                <br />
                <span>{t('reception_location')}</span>
                <span className={s.details}>{t('details')}</span>
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
            {t('rsvp')}
          </Link>
        </section>
      </main>
    </>
  )
}
