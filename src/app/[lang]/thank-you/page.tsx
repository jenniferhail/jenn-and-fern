import s from './page.module.scss'
import Box from '@/components/Box/Box'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <Box>
      <div className={s.inner}>
        <h1>
          <i>Thank You</i>
        </h1>
        <p>Please check your inbox for a welcome message!</p>
        <Link className="button" href={`/`}>
          Go Home
        </Link>
      </div>
    </Box>
  )
}
