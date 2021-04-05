import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import { CalendlyEventListener, InlineWidget } from 'react-calendly'

import Article from 'main_app/components/Article'

import classes from './styles.module.scss'

function ContactUs () {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <Article className={classes.fillHeight}>
          <section>
            <p>GET IN TOUCH</p>
            <h1>Schedule a call with us</h1>
            <CalendlyEventListener onEventScheduled={console.log}>
              <InlineWidget url='https://calendly.com/abel-osorio/30min?back=0' />
            </CalendlyEventListener>
<<<<<<< HEAD
            <span>or email us at</span><a href=''><span>info@wedevelop.me</span></a>
=======
            <p>or email us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>
>>>>>>> 142f4422911a3b6a17ea3329dfb6efecba1ea73e
          </section>
        </Article>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
