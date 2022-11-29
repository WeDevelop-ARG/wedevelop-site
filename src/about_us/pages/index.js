import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import NavBar from 'main_app/components/NavBar'
import OurCulture from '../components/OurCulture'
import OurCompany from '../components/OurCompany'
import PictureWall from 'main_app/components/PictureWall'
import Testimonials from 'main_app/components/Testimonials'
import Values from '../components/Values'

import PageMetadata from 'utils/marketing/PageMetadata'

import useMediaQuery from 'utils/use_media_query'
import useReviews from 'main_app/components/Testimonials/hooks/useReviews'

import AgileBook from 'assets/home/agile_book.png'
import WedevelopTeam from 'assets/home/wedevelop_team.png'
import WorkCoffee from 'assets/about_us/testimonials/work_cofee.png'

import { forTabletDown } from 'styles/media_queries'
import WeDevelopCulture from 'about_us/components/WeDevelopCulture'

function AboutUs () {
  const contactPagePath = '/about-us/contact'
  const { pathname, push } = useRouter()
  const handleClose = useCallback(() => {
    push('/about-us', undefined, { shallow: true, scroll: false })
  }, [push])

  const isTabletDown = useMediaQuery(forTabletDown)
  const { reviews } = useReviews()
  const renderTestimonials = () => {
    if (isTabletDown) return <Testimonials reviews={reviews} hideHeader />
    return <Testimonials reviews={reviews} />
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
        <OurCulture />
        <BackgroundContainer backgroundURL={AgileBook} />
        <Values />
        <BackgroundContainer backgroundURL={WedevelopTeam} />
        {renderTestimonials()}
        <BackgroundContainer backgroundURL={WorkCoffee} />
        <GetInTouch contactPagePath={contactPagePath} />
        <PictureWall />
      </Article>
      {contactPagePath === pathname && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer />
    </>
  )
}

export default AboutUs
