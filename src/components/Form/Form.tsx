'use client'

import s from './Form.module.scss'

const SaveTheDateForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formEl = document.querySelector('form') || undefined
    const formData = new FormData(formEl)
    const formValues = Object.fromEntries(formData.entries())

    const response = await fetch('/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
  }
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor="first_name">
        First name: <input type="text" name="first_name" />
      </label>
      <label htmlFor="last_name">
        Last name: <input type="text" name="last_name" />
      </label>
      <label htmlFor="email">
        Your email: <input type="email" name="email" />
      </label>
      <label htmlFor="address1">
        Address Line 1: <input type="text" name="address_line_1" />
      </label>
      <label htmlFor="address2">
        Address Line 2: <input type="text" name="address_line_2" />
      </label>
      <label htmlFor="city">
        City: <input type="text" name="city" />
      </label>
      <label htmlFor="state">
        State/Province/Region:{' '}
        <input type="text" name="state_province_region" />
      </label>
      <label htmlFor="postalCode">
        Postal Code: <input type="text" name="postal_code" />
      </label>
      <label htmlFor="country">
        Country: <input type="text" name="country" />
      </label>
      <label htmlFor="phone">
        Phone Number: <input type="tel" name="phone_number" />
      </label>
      <label htmlFor="whatsapp">
        WhatsApp: <input type="tel" name="whatsapp" />
      </label>

      <button type="submit" className={s.btn}>
        Submit
      </button>
    </form>
  )
}

export default SaveTheDateForm
