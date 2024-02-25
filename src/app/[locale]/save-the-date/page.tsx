import { unstable_setRequestLocale } from 'next-intl/server'
import s from './page.module.scss'
import cn from 'classnames'
import Box from '@/components/Box/Box'
import SaveTheDateForm from '@/components/Form/Form'
import { useTranslations } from 'next-intl'

export default function SaveTheDate({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('SaveTheDate')

  const labels = {
    first_name: t('first_name'),
    last_name: t('last_name'),
    email: t('email'),
    address_1: t('address_1'),
    address_2: t('address_2'),
    city: t('city'),
    state: t('state'),
    zip: t('zip'),
    country: t('country'),
    phone: t('phone'),
    whatsapp: t('whatsapp'),
    submit: t('submit'),
    error: t('error'),
  }

  return (
    <Box>
      <div className={cn(s.step1)}>
        <div className={s.middle}>
          <h1>
            <i>{t('date')}</i>
          </h1>
          <h2 className={s.tiny}>{t('location')}</h2>
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
          <p>{t('paragraph3')}</p>
          <p>{t('paragraph4')}</p>
          <SaveTheDateForm labels={labels} locale={locale} />
        </div>
      </div>
    </Box>
  )
}
