import Article from 'main_app/components/Article'
import NavBar from 'main_app/components/NavBar'
import CalendlyWidget from 'main_app/components/CalendlyWidget'
import Footer from 'main_app/components/Footer'

import classes from './styles.module.scss'

function ContactUs () {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <Article className={classes.fillHeight}>
          <section>
            <p className={classes.subheadingText}>GET IN TOUCH</p>
            <h1 className={classes.titleText}>Schedule a call with us</h1>
            <CalendlyWidget />
          </section>
        </Article>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
