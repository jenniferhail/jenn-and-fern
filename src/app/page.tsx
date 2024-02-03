import s from './page.module.scss'
import cn from 'classnames'
import Box from '@/components/Box/Box'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <Box>
      {/* <iframe
        title="Wedding Newsletter Signup"
        src="https://cdn.forms-content-1.sg-form.com/448ac8fe-bf2c-11ee-990c-aa5698d49483"
        seamless
        style={{ width: '100%', height: '100vh', border: 'none' }}
      /> */}
      <div className={cn(s.step1)}>
        <div className={cn(s.top, s.tiny)}>
          <span>Aug 10</span>
          <span className={s.center}>J + F</span>
          <span>2024</span>
        </div>

        <div className={s.middle}>
          <h1>
            Join us on a
            <br />
            <i>Saturday</i> in August,
            <br />
            in the middle of a <br />
            perennial <i>garden</i>,
            <br />
            as we celebrate <br />
            our <i>love story</i>.
          </h1>
        </div>

        <div className={s.bottom}>
          {/* <p>
            More details to come. Click below to receive updates, calendar
            invites and important information via our wedding newsletter.
          </p> */}
          {/* <Button text="Save Our Date" /> */}
          <div className={cn(s.top, s.tiny)}>
            <span>Ann</span>
            <span>Arbor</span>
          </div>
        </div>
      </div>

      {/* <div className={cn(s.step2)}>
          <iframe
            title="Wedding Newsletter Signup"
            src="https://cdn.forms-content-1.sg-form.com/448ac8fe-bf2c-11ee-990c-aa5698d49483"
          />
        </div> */}
    </Box>
  )
}
