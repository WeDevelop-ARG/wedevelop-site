import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import Article from 'main_app/components/Article'
import OurCompany from './components/OurCompany'
import Testimonials from 'main_app/components/Testimonials'
import GetInTouch from 'main_app/components/GetInTouch'
import ContactModal from 'main_app/components/ContactModal'

import TestimonialsBg from 'assets/home/testimonials_background_image.png'

function AboutUs () {
  const contactPagePath = '/about-us/contact'
  const match = useRouteMatch(contactPagePath)
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/about-us')
  }, [history])

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <OurCompany />
        <Testimonials bottomImageURL={TestimonialsBg} />
        <GetInTouch contactPagePath={contactPagePath} />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default AboutUs
