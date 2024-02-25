'use client'

import { useState } from 'react'
import s from './Form.module.scss'
import { useRouter } from '@/navigation'

interface FormLabels {
  labels: {
    first_name: string
    last_name: string
    email: string
    address_1: string
    address_2: string
    city: string
    state: string
    zip: string
    country: string
    phone: string
    whatsapp: string
    submit: string
    error: string
  }
}

const SaveTheDateForm = ({ labels }: FormLabels) => {
  const router = useRouter()
  const [error, setError] = useState<string>('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formEl = document.querySelector('form') || undefined
    const formData = new FormData(formEl)
    const formValues = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        router.push('/thank-you')
      } else {
        setError(labels.error)
      }
    } catch (error) {
      setError(labels.error)
    }
  }
  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="first_name">
          {labels.first_name} <input type="text" name="first_name" />
        </label>
        <label htmlFor="last_name">
          {labels.last_name} <input type="text" name="last_name" />
        </label>
        <label htmlFor="email">
          {labels.email} <input type="email" name="email" />
        </label>
        <label htmlFor="address1">
          {labels.address_1} <input type="text" name="address_line_1" />
        </label>
        <label htmlFor="address2">
          {labels.address_2} <input type="text" name="address_line_2" />
        </label>
        <label htmlFor="city">
          {labels.city} <input type="text" name="city" />
        </label>
        <label htmlFor="state">
          {labels.state}
          <input type="text" name="state_province_region" />
        </label>
        <label htmlFor="postalCode">
          {labels.zip} <input type="text" name="postal_code" />
        </label>
        <label htmlFor="country">
          {labels.country} <input type="text" name="country" />
        </label>
        <label htmlFor="phone">
          {labels.phone} <input type="tel" name="phone_number" />
        </label>
        <label htmlFor="whatsapp">
          {labels.whatsapp} <input type="tel" name="whatsapp" />
        </label>

        <button type="submit" className="button">
          {labels.submit}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default SaveTheDateForm
