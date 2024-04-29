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
  const t = useTranslations('Home')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>Registry</i>
        </h1>
        <p>
          We are so excited to celebrate our special day with all of you and are
          truly grateful for any contributions towards our future. If you wish
          to give a gift, we would be thrilled to receive something from our
          registry below. Thank you so much!
        </p>
        <a
          className="zola-registry-embed"
          href="www.zola.com/registry/hailvillavicenciowedding"
          data-registry-key="hailvillavicenciowedding"
        >
          Our Zola Wedding Registry
        </a>
        <Script src="/registry.js" />
      </section>
    </>
  )
}
