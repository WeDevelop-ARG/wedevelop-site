import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Skills from './components/Skills'
import Services from './components/Services'
import Methodologies from './components/Methodologies'
import Testimonials from './components/Testimonials'
import GetInTouch from './components/GetInTouch'
import Footer from 'main_app/components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'
import ContactModal from 'main_app/components/ContactModal'

function Landing () {
  usePageMetadata({
    title: 'A Human-Centered Company that Gets Things Done',
    description: 'We are a digital product agency that delivers meaningful experiences to clients and users all over the world.'
  })
  const match = useRouteMatch('/contact')
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/')
  }, [history])

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'light']}
      />
      <Article>
        <Header />
        <Services />
        <Methodologies />
        <Skills />
        <Testimonials />
        <AboutUs />
        <GetInTouch />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default Landing
