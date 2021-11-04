import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import Article from 'main_app/components/Article'
import AboutUs from './components/AboutUs'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import Header from './components/Header'
import NavBar from 'main_app/components/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import Services from './components/Services'
import Testimonials from 'main_app/components/Testimonials'

import usePageMetadata from 'utils/marketing/use_page_metadata'
import useReviews from 'main_app/components/Testimonials/hooks/useReviews'

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
  const { reviews } = useReviews()

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'light']}
      />
      <Article>
        <Header />
        <Services />
        <AboutUs />
        <Testimonials
          reviews={reviews}
        />
        <GetInTouch contactPagePath='/contact' />
        <PictureWall />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default Landing
