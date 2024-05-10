import Gallery from '@/components/Gallery/Gallery'
import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

const imageGallery = [
  {
    filePath: '/photos/toronto-pingpong.JPG',
    altText: 'Toronto Ping Pong',
    dimensions: { width: 315, height: 250 },
  },
  {
    filePath: '/photos/orlando-thanksgiving.JPG',
    altText: 'Orlando Thanksgiving',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/madison.JPG',
    altText: 'Madison',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/hyland-wedding.jpeg',
    altText: 'Hyland Wedding',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/ecuador.jpeg',
    altText: 'Jenn & Fern in Ecuador!',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/manta-wedding.JPG',
    altText: 'Manta Wedding',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/detroit-game.JPG',
    altText: 'Detroit Game',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/pr-wedding.JPG',
    altText: 'PR Wedding',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/puerto-rico.jpeg',
    altText: 'Puerto Rico',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/florida-wedding.JPG',
    altText: 'Florida Wedding',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/toronto-tower.jpeg',
    altText: 'Toronto Tower',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/wedding.jpg',
    altText: 'Jenn & Fern smiling at a wedding',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/blakes-cider.JPG',
    altText: 'Blakes Cider',
    dimensions: { width: 315, height: 250 },
  },
  {
    filePath: '/photos/ocala-christmas.JPG',
    altText: 'Ocala Christmas',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/proposal.JPG',
    altText: 'Proposal',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/engaged.JPG',
    altText: 'Engaged',
    dimensions: { width: 250, height: 315 },
  },
  {
    filePath: '/photos/celebration-dinner.jpeg',
    altText: 'Celebration Dinner',
    dimensions: { width: 250, height: 315 },
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
  const t = useTranslations('OurStory')

  return (
    <>
      <section className={s.intro}>
        <div className={s.content}>
          <h1 className="h1">
            <i>{t('title')}</i>
          </h1>
          {t.rich('content', {
            br: () => <br />,
            i: (chunks) => <i>{chunks}</i>,
            p: (chunks) => <p>{chunks}</p>,
          })}
        </div>
      </section>
      <section className={s.gallery}>
        <Gallery images={imageGallery} />
      </section>
    </>
  )
}
