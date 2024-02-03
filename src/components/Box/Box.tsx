'use client'

import s from './Box.module.scss'

interface BoxType {
  children: React.ReactNode
}

const Box = ({ children }: BoxType) => {
  return <div className={s.box}>{children}</div>
}

export default Box
