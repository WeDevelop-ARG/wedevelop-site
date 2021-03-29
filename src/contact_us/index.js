import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'

import ContactForm from './components/ContactForm'

function ContactUs () {
  return (
    <>
      <NavBar />
      <article>
        <ContactForm />
      </article>
      <Footer />
    </>
  )
}

export default ContactUs
