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
  const t = useTranslations('Things To Do')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>{t('title')}</i>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: t.raw('intro') }} />
      </section>
      <section className={s.section}>
        <h2>{t('coffee')}</h2>
        <ul>
          <li>Dozer Coffee</li>
          <li>Comet Coffee</li>
          <li>Argus Farm Stop</li>
          <li>Lowertown Bar & Cafe</li>
          <li>The Drip House</li>
        </ul>
        <h2>{t('brunch')}</h2>
        <ul>
          <li>Stray Hen</li>
          <li>Zingerman&apos;s Deli</li>
          <li>Kerrytown Market</li>
        </ul>
        <h2>{t('food')}</h2>
        <ul>
          <li>Tomukun</li>
          <li>York Food & Drink</li>
          <li>Zamaan Cafe</li>
          <li>Jerusalem Garden</li>
          <li>Mani Osteria & Bar</li>
          <li>Aventura</li>
          <li>Zingerman&apos;s Roadhouse</li>
          <li>Fleetwood Diner</li>
          <li>Blank Slate Creamery</li>
        </ul>
        <h2>{t('drinks')}</h2>
        <ul>
          <li>Nightcap</li>
          <li>The Last Word</li>
          <li>Blom Mead + Cider</li>
          <li>Lowertown Bar & Cafe</li>
          <li>Bill&apos;s Beer Garden</li>
        </ul>
        <h2>{t('in')}</h2>
        <ul>
          <li>Downtown</li>
          <li>Tubing on the lake</li>
          <li>Arboretum</li>
          <li>Art museum</li>
          <li>Natural history museum</li>
          <li>Hands on museum</li>
          <li>Kerry Town</li>
          <li>Local Theater</li>
        </ul>
        <h2>{t('out')}</h2>
        <ul>
          <li>Detroit</li>
          <li>Belle Isle</li>
          <li>LegoLand</li>
          <li>Canada</li>
          <li>Outlet Mall</li>
          <li>Takoi</li>
        </ul>
      </section>
    </>
  )
}
