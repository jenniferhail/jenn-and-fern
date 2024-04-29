import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Accordion from '@/components/Accordion/Accordion'

const faqs = [
  {
    title: 'When should I RSVP?',
    content: `The sooner the better! But please respond no later than July 1st. We have chosen a venue with limited space, so if you think you can't make it, please let us know so we can extend the invite to another guest.`,
  },
  {
    title: 'What should I wear?',
    content: `Think semi-formal + garden party: Suits and ties, long dresses. Our ceremony will be outdoors, weather permitting, so please plan accordingly, or bring a pair of shoes to swap into for the reception if you'd like. You will have a chance to explore the grounds an hour before the ceremony, through grass and concrete walkways.`,
  },
  {
    title: 'Where can I park for the ceremony?',
    content: `Parking is complimentary for our guests. Please check in at the front desk of Matthaei Botanical Gardens inside the visitors center with your parking space number to make sure that you’re included in our reservation.`,
  },
  {
    title: 'Where should I park for the reception?',
    content:
      'You can find street parking or use the Liberty Title lot across the street from the venue.',
  },
  {
    title: 'Can I smoke anywhere at the wedding?',
    content:
      'Smoking is not permitted in any area, inside or out, at our reception or ceremony venues.',
  },
  {
    title: 'What type of food will be served?',
    content: `We're having mediterranean street food from one of our favorite restaurants in Michigan. Not only is it delicious, it's clearly labeled for restrictive diets.`,
  },
  {
    title: 'Will alcohol be served?',
    content:
      'Yes, wine and beer will be served. There will also be many non-alcoholic options.',
  },
]

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Home')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>Your Questions, Answered</i>
        </h1>
        {faqs.map((faq, index) => (
          <Accordion key={index} title={faq.title} content={faq.content} />
        ))}
        <h2>Did we miss a question?</h2>
        <p>Send one of us a text and we&apos;ll add it to the list here.</p>
      </section>
    </>
  )
}
