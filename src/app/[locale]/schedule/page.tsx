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
          <i>Schedule</i>
        </h1>
        <p>
          We are overjoyed to have you join us on this beautiful journey as we
          become partners for life. It means the world to us to share in the
          warmth of your company on our special day. We have chosen a garden
          venue for our ceremony and a creative studio space for our reception,
          which we plan to transform with an abundance of fresh flowers.
        </p>
        <p>
          To help you navigate our day with ease, please see the schedule below.
        </p>

        <h2>Ceremony</h2>
        <p>
          Infused with natural charm, the perennial garden at the Matthaei
          Botanical Gardens remains a favorite setting for treasured moments.
          Its tranquil beauty adds an enchanting touch to special occasions.
          We’re excited to say &quot;I do&quot; in a location we can visit and
          enjoy year after year.
        </p>
        <p className={s.important}>
          <b>Venue:</b>
          Kimberly Maged Perennial Garden
          <br />
          Matthaei Botanical Gardens
          <br />
          1800 N Dixboro Road
          <br />
          Ann Arbor, MI 48105
        </p>
        <p className={s.important}>
          <b>Start Time:</b> 5:30pm, but please arrive by 4:30pm to experience
          the grounds and spend time in the gardens.
        </p>
        <Link
          href="https://www.google.com/maps/dir//Matthaei+Botanical+Gardens,+1800+N+Dixboro+Rd,+Ann+Arbor,+MI+48105/@42.3081156,-83.6923869,12.88z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883cabe478937947:0x98f029f1869e4017!2m2!1d-83.6632035!2d42.3022338!3e0?entry=ttu"
          className="button"
          target="_blank"
        >
          Get Directions
        </Link>
        <h2>Reception</h2>
        <p>
          The party continues at StudioStudio with an evening filled with
          heartfelt toasts, dinner from one of our favorite restaurants in
          Michigan and, of course, a good time on the dance floor. Nestled
          beside York Restaurant—an Ann Arbor favorite that sells everything one
          could need for fancy charcuterie—StudioStudio is an open and airy
          blank canvas for creative minds to use however they can imagine.
        </p>
        <p className={s.important}>
          <b>Venue:</b>
          StudioStudio
          <br />
          1946 Packard Street
          <br />
          Ann Arbor, MI 48104
        </p>
        <p className={s.important}>
          <b>Start Time:</b> 6:30pm to 11:30pm
        </p>
        <Link
          href="https://www.google.com/maps/dir//StudioStudio,+1946+Packard+St,+Ann+Arbor,+MI+48104/@42.257521,-83.7305617,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883caff281f80b77:0x678eeb6a629a1558!2m2!1d-83.7279868!2d42.2575171!3e0?entry=ttu"
          className="button"
          target="_blank"
        >
          Get Directions
        </Link>
        <h2>Let us know if you can make it</h2>
        <Link
          href="http://rsvp.jennandfern.com/"
          className="button"
          target="_blank"
        >
          RSVP by July 1st
        </Link>
      </section>
    </>
  )
}
