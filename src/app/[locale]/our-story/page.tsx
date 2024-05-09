import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('OurStory')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>{t('title')}</i>
        </h1>
        {t.rich('content', {
          br: () => <br />,
          i: (chunks) => <i>{chunks}</i>,
          p: (chunks) => <p>{chunks}</p>,
        })}
      </section>
    </>
  )
}
