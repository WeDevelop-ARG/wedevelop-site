import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import Header from './components/Header'
import NavBar from 'main_app/components/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import Testimonials from 'main_app/components/Testimonials'
import useReviews from 'main_app/components/Testimonials/hooks/useReviews'
import PageMetadata from 'utils/marketing/PageMetadata'
import StaffAugmentationService from './components/StaffAugmentationService'
import OurPortfolio from './components/OurPortfolio'
import AboutWeDevelop from 'main_app/components/AboutWeDevelop'

function Landing () {
  const { pathname, push } = useRouter()
  const contactPagePath = '/contact'

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
        <StaffAugmentationService />
        <OurPortfolio />
        <Testimonials
          reviews={reviews}
          title='A word from our clients'
          hideSubtitle
        />
        <AboutWeDevelop ctaLink={contactPagePath} />
        <GetInTouch contactPagePath={contactPagePath} />
        <PictureWall />
      </Article>
      {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer />
    </>
  )
}

export default Landing
