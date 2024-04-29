'use client'

import { locales, usePathname } from '@/navigation'
import React from 'react'
import s from './LocaleButton.module.scss'
import { useRouter } from 'next/navigation'
import cn from 'classnames'

function LocaleButton({ locale }: { locale: string }) {
  const router = useRouter()
  const currentPath = usePathname()

  return (
    <div className={s.buttons}>
      {locales?.map((item, key) => {
        return (
          <button
            className={cn(s.language, {
              [s.current]: item === locale,
            })}
            onClick={
              item !== locale
                ? () => router.push(`/${item}${currentPath}`)
                : undefined
            }
            key={key}
          >
            {item?.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export default LocaleButton
