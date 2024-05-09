import s from './page.module.scss'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Link } from '@/navigation'
import { thingsToDo } from './data'

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Things To Do')

  return (
    <>
      <section className={s.section}>
        <h1 className="h1">
          <i>{t('title')}</i>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: t.raw('intro') }} />
      </section>
      <section className={s.section}>
        {thingsToDo?.map((category) => (
          <div key={category.name}>
            <h2>{t(category.name)}</h2>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>
                  {item.link ? (
                    <Link href={item.link} target="_blank">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}
