import { unstable_setRequestLocale } from 'next-intl/server'
import s from './page.module.scss'
import cn from 'classnames'
import Box from '@/components/Box/Box'
import SaveTheDateForm from '@/components/Form/Form'

export default function SaveTheDate({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)

  return (
    <Box>
      <div className={cn(s.step1)}>
        <div className={s.middle}>
          <h1>
            <i>August 10, 2024</i>
          </h1>
          <h2 className={s.tiny}>Ann Arbor, Michigan</h2>
          <p>
            In place of traditionally mailed paper goods, we&apos;re going
            digital and using this e-mail list for everything you need to know
            about our wedding. It&apos;s 2024—let&apos;s save some trees (and
            money)!
          </p>
          <p>
            You&apos;ll receive updates when we post new information on our
            website, calendar invites to our ceremony and reception, and more.
            Written by Jenn &amp; Fern, your bride and groom-to-be, get ready
            for some fun email to hit your inbox.
          </p>

          <p>
            To start, fill in your latest contact info below, so we can keep you
            in the loop and—after it&apos;s all said and done—send you a thank
            you card for celebrating the best day with us.
          </p>
          <SaveTheDateForm />
        </div>
      </div>
    </Box>
  )
}
