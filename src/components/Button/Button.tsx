'use client'

import s from './Button.module.scss'

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return <a className={s.btn}>{text}</a>
}

export default Button
