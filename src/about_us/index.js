import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import Article from 'main_app/components/Article'
import Testimonials from 'main_app/components/Testimonials'
import GetInTouch from 'main_app/components/GetInTouch'
import ContactModal from 'main_app/components/ContactModal'
import Values from './components/Values'

function AboutUs () {
  const match = useRouteMatch('/about-us/contact')
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/about-us')
  }, [history])

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        pathLogo='#top'
      />
      <Article>
        <Testimonials />
        <GetInTouch />
        <Values />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default AboutUs
