import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import s from './page.module.scss'
import cn from 'classnames'
import Box from '@/components/Box/Box'
import { Link } from '@/navigation'

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
    <Box>
      <div className={cn(s.step1)}>
        <div className={cn(s.top, s.tiny)}>
          <span>{t('date')}</span>
          <span className={s.center}>{t('initials')}</span>
          <span>{t('year')}</span>
        </div>

        <div className={s.middle}>
          <h1>
            {t.rich('title', {
              br: () => <br />,
              i: (chunks) => <i>{chunks}</i>,
            })}
          </h1>
          <Link href={`/save-the-date`} className="button">
            {t('cta')}
          </Link>
        </div>

        <div className={cn(s.bottom, s.tiny)}>
          <span>{t('city')}</span>
          <span>{t('state')}</span>
        </div>
      </div>
    </Box>
  )
}
