import { Link } from '@/navigation'
import s from './Nav.module.scss'

const Nav = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.links}>
          <li className={s.logo}>
            <Link href="/">V</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Our Story</li>
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li>
            <Link href="/travel">Travel</Link>
          </li>
          <li>Things To Do</li>
          <li>FAQs</li>
          <li>Registry</li>
          <li>
            <Link href="/save-the-date">Save the Date</Link>
          </li>
          <li className={s.rsvp}>
            <Link href="http://rsvp.jennandfern.com/">RSVP by July 1st</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
