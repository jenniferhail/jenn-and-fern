import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import s from './page.module.scss'
import cn from 'classnames'
import Box from '@/components/Box/Box'
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
    <Box>
      <div className={cn(s.step1)}>
        <div className={cn(s.top, s.tiny)}>
          <span>Aug 10</span>
          <span className={s.center}>J + F</span>
          <span>2024</span>
        </div>

        <div className={s.middle}>
          <h1>
            Join us on a
            <br />
            <i>Saturday</i> in August,
            <br />
            in the middle of a <br />
            perennial <i>garden</i>,
            <br />
            as we celebrate <br />
            our <i>love story</i>.
          </h1>
          <Link href={`/save-the-date`} className="button">
            Save Our Date
          </Link>
        </div>

        <div className={cn(s.bottom, s.tiny)}>
          <span>Ann Arbor</span>
          <span>Michigan</span>
        </div>
      </div>
    </Box>
  )
}
