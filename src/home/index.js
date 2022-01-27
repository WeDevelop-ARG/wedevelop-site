import { useCallback } from 'react'
import { useRouter } from 'next/router'

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

function Landing () {
  const { pathname, push } = useRouter()

  const handleClose = useCallback(() => {
    push('/', undefined, { scroll: false, shallow: true })
  }, [push])
  const { reviews } = useReviews()

  return (
    <>
      <PageMetadata
        title='A Human-Centered Company that Gets Things Done'
        description='We are a digital product agency that delivers meaningful experiences to clients and users all over the world.'
      />
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
      {pathname === '/contact' && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer />
    </>
  )
}

export default Landing
