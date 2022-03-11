import Article from 'main_app/components/Article'
import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'

import PageMetadata from 'utils/marketing/PageMetadata'
import HubSpotCalendar from 'main_app/components/HubSpotCalendar'

import classes from './styles.module.scss'

function ContactUs () {
  return (
    <>
      <PageMetadata
        title='Get In Touch'
        description="Get in touch with us. You can schedule a call or fill out a form. We'll get back in no time."
      />
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'dark']}
      />
      <div>
        <Article>
          <section>
            <p className={classes.subheadingText}>GET IN TOUCH</p>
            <h1 className={classes.titleText}>Schedule a call with us</h1>
            <HubSpotCalendar sourcePage='contact' />
          </section>
        </Article>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
