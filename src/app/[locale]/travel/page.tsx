import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Link } from '@/navigation'
import cn from 'classnames'

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Travel')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>{t('title')}</i>
        </h1>
        {t.rich('intro', {
          br: () => <br />,
          i: (chunks) => <i>{chunks}</i>,
          p: (chunks) => <p>{chunks}</p>,
        })}
        <h2>{t('heading1')}</h2>
        {t.rich('content1', {
          br: () => <br />,
          i: (chunks) => <i>{chunks}</i>,
          p: (chunks) => <p>{chunks}</p>,
        })}
        <h2>{t('heading2')}</h2>
        <div dangerouslySetInnerHTML={{ __html: t.raw('content2') }} />
        <h2>{t('heading3')}</h2>
        <div dangerouslySetInnerHTML={{ __html: t.raw('content3') }} />
        <Link className={cn(s.rsvp, 'button')} href={t('button3link')}>
          {t('button3')}
        </Link>
      </section>
    </>
  )
}
