import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import Article from 'main_app/components/Article'
import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import NavBar from 'main_app/components/NavBar'
import OurCulture from './components/OurCulture'
import OurCompany from './components/OurCompany'
import PictureWall from 'main_app/components/PictureWall'
import Testimonials from 'main_app/components/Testimonials'
import Values from './components/Values'

import usePageMetadata from 'utils/marketing/use_page_metadata'
import useMediaQuery from 'utils/use_media_query'
import AgileBook from 'assets/home/agile_book.png'
import WedevelopTeam from 'assets/home/wedevelop_team.png'
import WorkCoffee from 'assets/about_us/testimonials/work_cofee.png'
import { forTabletDown } from 'styles/media_queries'

function AboutUs () {
  usePageMetadata({
    title: 'About Us',
    description: 'Founded in 2019, WeDevelop is a Web Development and IT Staff Augmentation agency. Meet us.'
  })
  const contactPagePath = '/about-us/contact'
  const match = useRouteMatch(contactPagePath)
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/about-us')
  }, [history])
  const isTabletDown = useMediaQuery(forTabletDown)
  const renderTestimonials = () => {
    if (isTabletDown) return <Testimonials hideHeader />
    return <Testimonials />
  }

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <OurCompany />
        <OurCulture />
        <BackgroundContainer backgroundURL={AgileBook} />
        <Values />
        <BackgroundContainer backgroundURL={WedevelopTeam} />
        {renderTestimonials()}
        <BackgroundContainer backgroundURL={WorkCoffee} />
        <GetInTouch contactPagePath={contactPagePath} />
        <PictureWall />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default AboutUs
