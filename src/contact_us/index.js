import Article from 'main_app/components/Article'
import NavBar from 'main_app/components/NavBar'
import CalendlyWidget from 'main_app/components/CalendlyWidget'
import Footer from 'main_app/components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import classes from './styles.module.scss'

function ContactUs () {
  // usePageMetadata({
  //   title: 'Get in touch',
  //   description: 'Self schedule a call whenever works best for you, shot us an email, or call us if you prefer so. We look forward to hearing from you.'
  // })

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'dark']}
      />
      <div>
        <Article>
          <section>
            <p className={classes.subheadingText}>GET IN TOUCH</p>
            <h1 className={classes.titleText}>Schedule a call with us</h1>
            <CalendlyWidget sourcePage='contact' />
          </section>
        </Article>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
