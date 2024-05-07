'use client'
import { Link } from '@/navigation'
import s from './NavVertical.module.scss'
import cn from 'classnames'
import { useEffect, useState, KeyboardEvent } from 'react'

const NavVertical = ({
  links,
}: {
  links: { link: string; label: string; target?: string }[]
}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !document.querySelector('nav')?.contains(event.target) &&
        !document.querySelector('nav button')?.contains(event.target)
      ) {
        setOpen(false)
      }
    }
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', (event) => handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', (event) => handleEscapeKey)
    }
  }, [])

  return (
    <nav className={cn(s.nav, open && s.open)}>
      <button onClick={() => setOpen(!open)}>Menu</button>
      <ul className={s.links}>
        {links?.map((link, i) => {
          return (
            <li key={i}>
              <Link href={link.link} target={link.target ? link.target : ''}>
                {link.label}
              </Link>
            </li>
          )
        })}

        {/*
        <li className={s.btn}>
        </li> */}
      </ul>
    </nav>
  )
}

export default NavVertical
