import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import Article from 'main_app/components/Article'
import OurCulture from './components/OurCulture'
import OurCompany from './components/OurCompany'
import Testimonials from 'main_app/components/Testimonials'
import GetInTouch from 'main_app/components/GetInTouch'
import PictureWall from 'main_app/components/PictureWall'
import ContactModal from 'main_app/components/ContactModal'
import Values from './components/Values'

import usePageMetadata from 'utils/marketing/use_page_metadata'
import WorkCofee from 'assets/about_us/testimonials/work_cofee.png'

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

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <OurCompany />
        <OurCulture />
        <Values />
        <Testimonials bottomImageURL={WorkCofee} />
        <GetInTouch contactPagePath={contactPagePath} />
        <PictureWall />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default AboutUs
