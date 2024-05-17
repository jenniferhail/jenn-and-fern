import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Accordion from '@/components/Accordion/Accordion'

const faqsEN = [
  {
    title: 'When should I RSVP?',
    content: `The sooner the better! Our venue needs to know a final headcount by no later than July 1st.`,
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
    content: `We're having mediterranean street food from one of our favorite restaurants in Michigan. Not only is it delicious, it's also  clearly labeled for restrictive diets.`,
  },
  {
    title: 'Will alcohol be served?',
    content:
      'Yes, wine and beer will be served. There will also be many non-alcoholic options.',
  },
]

const faqsES = [
  {
    title: '¿Cuando debo dar mi RSVP?',
    content: `Lo mas pronto posible seria lo ideal. Nuestro lugar necesita conocer un recuento final a más tarde el 1 de julio.`,
  },
  {
    title: '¿Que debo vestir?',
    content: `Ropa semi formal + fiesta de jardín: Traje y corbata, o vestidos largos. La ceremonia no es bajo techo y el mes de agosto se presta a tener temperaturas templadas. La ceremonia es en un jardín, así que te recomendamos tacones que no sean muy finos ya que se anidarían en la grama. Si deseas trae un par de zapatos adicionales por si deseas cambiarte en la recepción. Tendrás la oportunidad de explorar el jardín botánico antes de la ceremonia y el suelo es una combinación de concreto y grama.`,
  },
  {
    title: '¿Dónde puedo estacionar para la ceremonia?',
    content: `Estacionamiento es complementario para los invitados. Asegúrate de tomar el número del espacio donde te estacionaste y has el check-in en la recepción del jardín botánico (Visitor Center).`,
  },
  {
    title: '¿Dónde pedo estacionar para la recepción?',
    content:
      'Estacionamiento para la recepción se puede encontrar al cruzar la calle en el lote de Liberty Title. Este estacionamiento no es complementario, pero es gratuito.',
  },
  {
    title: '¿Puedo fumar?',
    content:
      'No. No se permite fumar dentro o fueras de las instalaciones del o los eventos.',
  },
  {
    title: '¿Qué tipo de comida habrá?',
    content: `Se servirá comida mediterránea proveída por uno de nuestros restaurantes favoritos. No tan solo la encontramos exquisita si no también tiene un menú dedicado para personas con restricciones alimenticias.`,
  },
  {
    title: '¿Se servirá alcohol?',
    content:
      'Si, tendremos vino y cerveza. También tendremos muchas opciones sin alcohol.',
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
  const t = useTranslations('FAQs')

  const getFAQs = locale === 'en' ? faqsEN : faqsES

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>{t('title')}</i>
        </h1>
        {getFAQs.map((faq, index) => (
          <Accordion key={index} title={faq.title} content={faq.content} />
        ))}
        <h2>{t('heading1')}</h2>
        {t.rich('content1', {
          br: () => <br />,
          i: (chunks) => <i>{chunks}</i>,
          p: (chunks) => <p>{chunks}</p>,
        })}
      </section>
    </>
  )
}
