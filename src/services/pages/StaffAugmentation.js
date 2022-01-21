import { useCallback } from 'react'
import Article from 'main_app/components/Article'

import Benefits from '../components/benefits'
import ContactModal from 'main_app/components/ContactModal'
import Details from '../components/details'
import Hero from '../components/hero'
import HowDoesItWorks from 'main_app/components/HowDoesItWorks'
import PictureWall from 'main_app/components/PictureWall'
import Schedule from '../components/schedule'
import StaffDetails from '../components/details/components/StaffDetails'

import photo from 'assets/services/photo-staff-augmentation.svg'
import icon from 'assets/services/icon-staff-augmentation.svg'
import background from 'assets/services/background-staff-augmentation.png'
import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import PageMetadata from 'utils/marketing/PageMetadata'

import classes from './services.module.scss'
import { useRouter } from 'next/router'

function StaffAugmentation () {
  const SERVICE_NAME = 'staff-augmentation'
  const contactPagePath = '/services/staff-augmentation/contact'
  const { pathname, push } = useRouter()
  const handleClose = useCallback(() => {
    push('/services/staff-augmentation')
  }, [push])

  return (
    <>
      <PageMetadata
        title='Staff Augmentation'
        description='A solid IT Staffing Agency building up the most agile and efficient teams in the world. Get a free quote within the next hour.'
      />
      <NavBar variant={['solid', 'dark']} />
      <Article>
        {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
        <Hero
          service={SERVICE_NAME}
          className={classes.sectionContainer}
          contactPagePath={contactPagePath}
          icon={icon}
          photo={photo}
          background={background}
          title={<>Staff <br />Augmentation</>}
          description='Expand your team with our skilled experts who can scale up your development speed, quality and substantially cut down your costs.'
        />
        <section className={classes.serviceDetails}>
          <Details subTitle='Get your dream team of highly skilled professionals'>
            <StaffDetails />
          </Details>
        </section>
        <HowDoesItWorks />
        <Benefits className={classes.sectionContainer} service='staff-augmentation' />
        <Schedule
          className={classes.sectionContainer}
          contactPagePath={contactPagePath}
          service={SERVICE_NAME}
        />
        <PictureWall />
      </Article>
      <Footer />
    </>
  )
}

export default StaffAugmentation
