import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import Registry from '/public/Zola-Registry.jpg'
import { Link } from '@/navigation'

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
        <Button
          href="www.zola.com/registry/hailvillavicenciowedding"
          text={t('cta')}
        />
        <Link
          href="www.zola.com/registry/hailvillavicenciowedding"
          target="_blank"
        >
          <Image src={Registry} alt="Our wedding registry" />
        </Link>
      </section>
    </>
  )
}
