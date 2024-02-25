'use client'

import { locales, usePathname } from '@/navigation'
import React from 'react'
import s from './LocaleButton.module.scss'
import { useRouter } from 'next/navigation'

function LocaleButton({ locale }: { locale: string }) {
  const buttonText = locales.find((item) => item !== locale)
  const router = useRouter()
  const currentPath = usePathname()

  return (
    <button
      className={s.language}
      onClick={() => router.push(`/${buttonText}${currentPath}`)}
    >
      {buttonText?.toUpperCase()}
    </button>
  )
}

export default LocaleButton
