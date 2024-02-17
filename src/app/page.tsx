import s from './page.module.scss'
import cn from 'classnames'
import Box from '@/components/Box/Box'
import Link from 'next/link'

export default function Home() {
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
        </div>

        <div className={s.bottom}>
          <Link href={`/save-the-date`} className="button">
            Save Our Date
          </Link>
          <div className={cn(s.top, s.tiny)}>
            <span>Ann</span>
            <span>Arbor</span>
          </div>
        </div>
      </div>
    </Box>
  )
}
