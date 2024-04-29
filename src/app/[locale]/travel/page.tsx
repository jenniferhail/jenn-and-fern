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
  const t = useTranslations('Home')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>Travel</i>
        </h1>
        <p>
          Ann Arbor is a beautiful college town only 40 minutes west of Detroit.
          Jen says the tree-lined neighborhoods feel a lot like Louisville, KY —
          where she lived before moving to Michigan.
        </p>
        <p>
          The summers here are absolutely perfect — especially after waiting all
          winter long. If you have the extra time, we highly recommend extending
          your trip and visiting Lake Michigan, or even venturing north to the
          UP (Upper Penninsula).
        </p>

        <h2>Getting Here</h2>
        <p>
          The simplest way for many of you will be to fly into DTW and Uber/Lyft
          to AA or rent a car for full control over your journey. Please let us
          know if you&apos;d like help making a group for splitting car or
          Airbnb rentals.
        </p>
        <p>
          If you&apos;re the adventurous type, you can fly into Chicago and take
          the Amtrak from Union Station to Ann Arbor. We took the trip for the
          first time in March and it was really lovely, only around 4 hours and
          no TSA required. Plan to arrive on Friday if you want to go this
          route.
        </p>
        <h2>Lodging</h2>
        <p>
          We recommend staying within a 10-15 minute drive of our ceremony and
          reception venues, on the east side of the city. Here are a few
          options, or you can search for a place to stay via Airbnb.
        </p>
        <p>
          Hyatt Place Ann Arbor
          <br />
          <a href="https://maps.app.goo.gl/3qzEPuwG1R5w3d77A">View on map</a>
        </p>
        <p>
          DoubleTree by Hilton Ann Arbor North
          <br />
          <a href="https://maps.app.goo.gl/hCY7vcCaiq8623pw5">View on map</a>
        </p>
        <p>
          Hampton Inn Ann Arbor-South
          <br />
          <a href="https://maps.app.goo.gl/5b4zw1sRtBcW7B3RA">View on map</a>
        </p>
        <h2>After You Arrive</h2>
        <p>
          Check out our <Link href="/things-to-do">Things To Do page</Link> for
          suggestions for sight-seeing, places to eat and more.
        </p>
        <Link className={cn(s.rsvp, 'button')} href="/things-to-do">
          Find things to do
        </Link>
      </section>
    </>
  )
}
