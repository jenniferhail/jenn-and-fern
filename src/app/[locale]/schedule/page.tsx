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
  const t = useTranslations('Schedule')

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
          p: (chunks) => <p>{chunks}</p>,
        })}
        <p className={s.important}>
          <b>{t('location1.title')}</b>
          {t.rich('location1.content', {
            br: () => <br />,
            p: (chunks) => <p>{chunks}</p>,
          })}
        </p>
        <p className={s.important}>
          <b>{t('time1.title')}</b>
          {t.rich('time1.content', {
            br: () => <br />,
            p: (chunks) => <p>{chunks}</p>,
          })}
        </p>
        {/* <Link href={t('directions1.link')} className="button" target="_blank">
          {t('directions1.title')}
        </Link> */}
        <h2>{t('heading2')}</h2>
        {t.rich('content2', {
          br: () => <br />,
          p: (chunks) => <p>{chunks}</p>,
        })}
        <p className={s.important}>
          <b>{t('location2.title')}</b>
          {t.rich('location2.content', {
            br: () => <br />,
            p: (chunks) => <p>{chunks}</p>,
          })}
        </p>
        <p className={s.important}>
          <b>{t('time2.title')}</b>
          {t.rich('time2.content', {
            br: () => <br />,
            p: (chunks) => <p>{chunks}</p>,
          })}
        </p>
        <Link href={t('directions2.link')} className="button" target="_blank">
          {t('directions2.title')}
        </Link>

        <h2>{t('heading3')}</h2>
        {t.rich('content3', {
          br: () => <br />,
          p: (chunks) => <p>{chunks}</p>,
        })}
        <p className={s.important}>
          <b>{t('location3.title')}</b>
          {t.rich('location3.content', {
            br: () => <br />,
            p: (chunks) => <p>{chunks}</p>,
          })}
        </p>
        <p className={s.important}>
          <b>{t('time3.title')}</b>
          {t.rich('time3.content', {
            br: () => <br />,
            p: (chunks) => <p>{chunks}</p>,
          })}
        </p>
        <Link href={t('directions3.link')} className="button" target="_blank">
          {t('directions3.title')}
        </Link>
        <h2>{t('heading4')}</h2>
        <Link href={t('button4link')} className="button" target="_blank">
          {t('button4')}
        </Link>
      </section>
    </>
  )
}
