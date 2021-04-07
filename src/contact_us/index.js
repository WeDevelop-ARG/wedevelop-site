import { CalendlyEventListener, InlineWidget } from 'react-calendly'
import { useMemo } from 'react'

import Article from 'main_app/components/Article'
import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import useMediaQuery from 'utils/use_media_query'

import classes from './styles.module.scss'

function ContactUs () {
  const isTablet = useMediaQuery('screen and (min-width: 725px)')
  const isDesktop = useMediaQuery('screen and (min-width: 1250px)')
  const height = useMemo(() => {
    if (isTablet) return '916px'
    else if (isDesktop) return '646px'
    else return '842px'
  }, [isTablet, isDesktop])
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <Article className={classes.fillHeight}>
          <section>
            <p className={classes.subheadingText}>GET IN TOUCH</p>
            <h1 className={classes.titleText}>Schedule a call with us</h1>
            <CalendlyEventListener onEventScheduled={console.log}>
              <InlineWidget
                url='https://calendly.com/wedevelop/meet-us'
                styles={{ position: 'relative', minWidth: '320px', height }}
              />
            </CalendlyEventListener>
            <p>or email us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>
          </section>
        </Article>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
