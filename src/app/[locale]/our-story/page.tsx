import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

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
          <i>Our Story</i>
        </h1>
        <p>
          The story of Jenn and Fer is one of those &ldquo;God works in
          mysterious ways&rdquo; tales. In September 2018, through circumstances
          shaped by availability in his rotational program, Fernando found
          himself moving to Louisville, KY, instead of the other option,
          Chicago, IL. Little did he know, this change would become a pivotal
          moment in his life.
        </p>
        <p>
          A few months later while on a trip to Mexico, Jenn rekindled her love
          for Latin music, a passion that led her to seek out salsa dancing
          lessons as soon as she returned home. She began attending classes and
          social dances held on Wednesdays at Play—a decision that would
          serendipitously align with Fernando&apos;s path.
        </p>
        <p>
          Come January 2, 2019, Fernando, looking to broaden his horizons, made
          the choice to step out and immerse himself in the world of salsa. He
          discovered that Play also hosted lessons and a social dance every
          Wednesday. It was at this local bar, on the dance floor, where the
          rhythm of salsa would orchestrate the steps leading Jenn and Fer into
          each other&apos;s lives.
        </p>
      </section>
    </>
  )
}
