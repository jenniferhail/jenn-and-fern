'use client'

import s from './Button.module.scss'

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  // const person1 = { email: 'person1@example.com', first_name: 'Person 1' }
  // const person2 = { email: 'person2@example.com', first_name: 'Person 2' }
  // const person3 = { email: 'person3@example.com', first_name: 'Person 3' }
  const person4 = { email: 'person4@example.com', first_name: 'Person 4' }

  const handlePUT = async () => {
    const response = await fetch('/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person4),
    })
  }

  return (
    <a className={s.btn} onClick={handlePUT}>
      {text}
    </a>
  )
}

export default Button
