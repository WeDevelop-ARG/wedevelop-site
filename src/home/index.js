import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import useAvailableDevs from './hooks/useAvailableDevs'

import Article from 'main_app/components/Article'
import AvailableDevs from '../staff_augmentation/components/AvailableDevs'
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
import TopEngineersModal from './components/TopEngineersModal'

function Landing () {
  const { availableDevs } = useAvailableDevs()
  const { pathname, push } = useRouter()
  const contactPagePath = '/contact'
  const [isTopEngineersModalOpen, setIsTopEngineersModalOpen] = useState(false)

  const handleClose = useCallback(async () => {
    await push('/', undefined, { scroll: false, shallow: true })
  }, [push])
  const { reviews } = useReviews()

  const handleTopEngineersModalOpen = useCallback(() => {
    setIsTopEngineersModalOpen(true)
  }, [])

  const handleTopEngineersModalClose = useCallback(() => {
    setIsTopEngineersModalOpen(false)
  }, [])

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
        <AvailableDevs
          heading='Top Engineers'
          title='Get a look at our top IT talents'
          description='Instant access to the best Latin American Talent Pool'
          devs={availableDevs}
          buttonText='Hire your new dev today'
          ctaAction={handleTopEngineersModalOpen}
        />
        <GetInTouch contactPagePath={contactPagePath} />
        <PictureWall />
      </Article>
      <TopEngineersModal
        isOpen={isTopEngineersModalOpen}
        onRequestClose={handleTopEngineersModalClose}
      />
      {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer contactPagePath={contactPagePath} hideContactButton={false} />
    </>
  )
}

export default Landing
