import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import { CalendlyEventListener, InlineWidget } from 'react-calendly'

import Article from 'main_app/components/Article'

import classes from './styles.module.scss'

function ContactUs () {
  function isCalendlyEvent (e) {
    return e.data.event &&
    e.data.event.indexOf('calendly') === 0
  }

  window.addEventListener(
    'message',
    function (e) {
      if (isCalendlyEvent(e)) {
        if (e.data === 'calendly.event_scheduled') {
          console.log(e.data)
        }
      }
    }
  )

  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <Article className={classes.fillHeight}>
          <p>GET IN TOUCH</p>
          <h2>Schedule a call with us</h2>
          <CalendlyEventListener onEventScheduled={isCalendlyEvent}>
            <InlineWidget url='https://calendly.com/abel-osorio/30min?back=0' />
          </CalendlyEventListener>
          <span>or email us at</span><a href=''><span>info@wedevelop.me</span></a>
        </Article>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
