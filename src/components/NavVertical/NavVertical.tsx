'use client'
import { Link } from '@/navigation'
import s from './NavVertical.module.scss'
import cn from 'classnames'
import { useEffect, useState } from 'react'

const NavVertical = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !document.querySelector('nav')?.contains(event.target) &&
        !document.querySelector('nav button')?.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  return (
    <nav className={cn(s.nav, open && s.open)}>
      <button onClick={() => setOpen(!open)}>Menu</button>
      <ul className={s.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li>
          <Link href="/travel">Travel</Link>
        </li>
        <li>
          <Link href="/things-to-do">Things To Do</Link>
        </li>
        <li>
          <Link href="/our-story">Our Story</Link>
        </li>
        <li>
          <Link href="/faqs">FAQs</Link>
        </li>
        <li>
          <Link href="/registry">Registry</Link>
        </li>
        <li>
          <Link href="/save-the-date">Save the Date</Link>
        </li>
        <li className={s.btn}>
          <Link href="http://rsvp.jennandfern.com/" target="_blank">
            RSVP by July 1st
          </Link>
        </li>
      </ul>
      <div className={s.right}>
        <Link
          className={s.rsvp}
          href="http://rsvp.jennandfern.com/"
          target="_blank"
        >
          RSVP
        </Link>{' '}
        <span> by 07.01.24</span>
      </div>
    </nav>
  )
}

export default NavVertical
