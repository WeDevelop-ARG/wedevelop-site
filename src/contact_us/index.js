import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'

import ContactForm from './components/ContactForm'
import Article from 'main_app/components/Article'

function ContactUs () {
  return (
    <>
      <NavBar />
      <Article>
        <ContactForm />
      </Article>
      <Footer />
    </>
  )
}

export default ContactUs
