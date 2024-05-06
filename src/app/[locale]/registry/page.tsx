import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Link } from '@/navigation'
import Script from 'next/script'

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Registry')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>{t('title')}</i>
        </h1>
        <p>{t('content')}</p>
        <a
          className="zola-registry-embed"
          href="www.zola.com/registry/hailvillavicenciowedding"
          data-registry-key="hailvillavicenciowedding"
        >
          {t('embed_title')}
        </a>
        <Script src="/registry.js" />
      </section>
    </>
  )
}
