import { useCallback } from 'react'
import { useRouter } from 'next/router'

import useMediaQuery from 'utils/use_media_query'
import useReviews from 'main_app/components/Testimonials/hooks/useReviews'

import AboutWeDevelop from '../components/AboutWeDevelop'
import Article from 'main_app/components/Article'
import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import NavBar from 'main_app/components/NavBar'
import OurCompany from '../components/OurCompany'
import PageMetadata from 'utils/marketing/PageMetadata'
import PictureWall from 'main_app/components/PictureWall'
import Testimonials from 'main_app/components/Testimonials'
import WorkCoffee from 'assets/about_us/testimonials/work_cofee.png'

import { forTabletDown } from 'styles/media_queries'
import WeDevelopCulture from 'about_us/components/WeDevelopCulture'
import MeetOurCEO from 'about_us/components/MeetOurCEO'

function AboutUs () {
  const contactPagePath = '/about-us/contact'
  const { pathname, push } = useRouter()
  const handleClose = useCallback(async () => {
    await push('/about-us', undefined, { shallow: true, scroll: false })
  }, [push])

  const isTabletDown = useMediaQuery(forTabletDown)
  const { reviews } = useReviews()
  const renderTestimonials = () => {
    if (isTabletDown) {
      return (
        <Testimonials
          reviews={reviews}
          hideHeader
          ctaText={'Let\'s work together on your digital acceleration'}
          ctaLink={contactPagePath}
          showCta
        />
      )
    }

    return (
      <Testimonials
        title='A word from our clients'
        description='No information is more reliable than what our customers say about us'
        reviews={reviews}
        ctaText={'Let\'s work together on your digital acceleration'}
        ctaLink={contactPagePath}
        showCta
      />
    )
  }

  return (
    <>
      <PageMetadata
        title='About Us'
        description='Founded in 2019, WeDevelop is a Web Development and IT Staff Augmentation agency. Meet us.'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <OurCompany />
        <WeDevelopCulture />
        <MeetOurCEO />
        <AboutWeDevelop ctaLink={contactPagePath} />
        {renderTestimonials()}
        <BackgroundContainer backgroundURL={WorkCoffee} />
        <GetInTouch
          description=''
          contactPagePath={contactPagePath}
        />
        <PictureWall />
      </Article>
      {contactPagePath === pathname && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer />
    </>
  )
}

export default AboutUs
