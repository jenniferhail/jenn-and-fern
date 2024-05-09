'use client'

import s from './Button.module.scss'

interface ButtonProps {
  href: string
  text: string
}

const Button = ({ href, text }: ButtonProps) => {
  return (
    <a href={href} className={s.btn}>
      {text}
    </a>
  )
}

export default Button
