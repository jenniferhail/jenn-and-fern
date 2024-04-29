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
  const t = useTranslations('Home')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>Things To Do</i>
        </h1>
        <p>
          We&apos;ve lived in Ann Arbor for three years and have made a list of
          our favorite spots, but there are still so many on our wish list.
        </p>
        <p>
          Check out{' '}
          <Link href="https://www.annarbor.org/things-to-do/" target="_blank">
            this resource
          </Link>
          , or see our recommendations below.
        </p>
      </section>
      <section className={s.section}>
        <h2>Food & Drink</h2>
        <ul>
          <li>Stray Hen</li>
          <li>Tomukun</li>
          <li>Takoi</li>
          <li>Lowertown Bar & Cafe</li>
          <li>York Food & Drink</li>
          <li>Zamaan Cafe</li>
          <li>Dozer Coffee</li>
          <li>Comet Coffee</li>
          <li>Jerusalem Garden</li>
          <li>Argus Farm Stop</li>
          <li>Mani Osteria & Bar</li>
          <li>Aventura</li>
          <li>The Drip House</li>
          <li>Nightcap</li>
          <li>Kerrytown Market</li>
          <li>Zingerman&apos;s Deli</li>
          <li>Zingerman&apos;s Roadhouse</li>
          <li>The Last Word</li>
          <li>Bill&apos;s Beer Garden</li>
          <li>Fleetwood Diner</li>
          <li>Blank Slate Creamery</li>
          <li>Blom Mead + Cider</li>
        </ul>
        <h2>In Ann Arbor</h2>
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
        <h2>Outside Ann Arbor</h2>
        <ul>
          <li>Detroit</li>
          <li>Belle Isle</li>
          <li>LegoLand</li>
          <li>Canada</li>
          <li>Outlet Mall</li>
        </ul>
      </section>
    </>
  )
}
