import s from './index.module.scss'
import cn from 'classnames'
import Box from '@/components/Box/Box'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <Box>
      <div className={cn(s.top, s.tiny)}>
        <span>agosto 10</span>
        <span className={s.center}>J + F</span>
        <span>2024</span>
      </div>

      <div className={s.middle}>
        <h1>
          Acompáñanos en
          <br />
          un <i>sábado</i> de agosto,
          <br />
          en medio de un <br />
          <i>jardín</i> perenne,
          <br />
          mientras celebramos <br />
          neustra historia de <i>amor</i>.
        </h1>
      </div>

      <div className={s.bottom}>
        {/* <p>
            Más detalles próximamente. Haga clic a continuación para recibir
            actualizaciones, invitaciones de calendario e información importante
            a través de nuestro boletín de bodas.
          </p> */}
        <Button text="Guardar nuestra fecha" />
        <div className={cn(s.top, s.tiny)}>
          <span>Ann</span>
          <span>Arbor</span>
        </div>
      </div>
    </Box>
  )
}
