import { unstable_setRequestLocale } from 'next-intl/server'
import s from './page.module.scss'
import Box from '@/components/Box/Box'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

export default function ThankYou({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('ThankYou')

  return (
    <Box>
      <div className={s.inner}>
        <h1>
          <i>{t('title')}</i>
        </h1>
        <p>{t('subtitle')}</p>
        <Link className="button" href={`/`}>
          {t('cta')}
        </Link>
      </div>
    </Box>
  )
}
