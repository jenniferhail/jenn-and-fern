'use client'

import { useState } from 'react'
import s from './Accordion.module.scss'

interface AccordionProps {
  title: string
  content: string
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={s.div}>
      <button className={s.btn} onClick={toggleAccordion}>
        {title}
      </button>
      {isExpanded && <p className={s.content}>{content}</p>}
    </div>
  )
}

export default Accordion
