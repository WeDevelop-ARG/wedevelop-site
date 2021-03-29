import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'

import ContactForm from './components/ContactForm'
import Article from 'main_app/components/Article'

import classes from './styles.module.scss'

function ContactUs () {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <Article className={classes.fillHeight}>
          <ContactForm />
        </Article>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
