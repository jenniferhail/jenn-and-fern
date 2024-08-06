import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Link } from '@/navigation'

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Seating')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>{t('title')}</i>
        </h1>
        <h1 className="h1">
          <i>{t('title2')}</i>
        </h1>
        {t.rich('intro', {
          br: () => <br />,
          i: (chunks) => <i>{chunks}</i>,
          p: (chunks) => <p>{chunks}</p>,
        })}
      </section>
    </>
  )
}
