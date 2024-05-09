import Draggable from '../Draggable/Draggable'
import s from './Card.module.scss'

const Card = () => {
  return (
    <Draggable initialLeft={97} initialTop={0}>
      <div className={s.card}>
        <div className={s.inner}>
          <div className={s.top}>08.10.2024</div>
          <div className={s.bottom}>
            <div className={s.line}>
              <span>Meet us in the garden</span>
              <span className={s.time}>@ 5:30pm</span>
            </div>
            <div className={s.line}>
              <span>Let’s celebrate!</span>
              <span className={s.time}>@ 6:30pm</span>
            </div>
            <div className={s.line}>
              <span>The after party</span>
              <span className={s.time}>@ 11:30pm</span>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default Card
