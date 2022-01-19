import { useCallback } from 'react'

import Benefits from './benefits'
import ContactModal from 'main_app/components/ContactModal'
import Details from './details'
import Hero from './hero'
import HowDoesItWorks from 'main_app/components/HowDoesItWorks'
import PictureWall from 'main_app/components/PictureWall'
import Schedule from './schedule'
import StaffDetails from './details/components/StaffDetails'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import photo from 'assets/services/photo-staff-augmentation.svg'
import icon from 'assets/services/icon-staff-augmentation.svg'
import background from 'assets/services/background-staff-augmentation.png'

import classes from './services.module.scss'
import { Router, useRouter } from 'next/router'

function StaffAugmentation () {
  // usePageMetadata({
  //   title: 'Staff Augmentation',
  //   description: 'A solid IT Staffing Agency building up the most agile and efficient teams in the world. Get a free quote within the next hour.'
  // })
  const SERVICE_NAME = 'staff-augmentation'
  const contactPagePath = '/services/staff-augmentation/contact'
  const { pathname } = useRouter()
  const handleClose = useCallback(() => {
    Router.push('/services/staff-augmentation')
  }, [])

  return (
    <>
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
        <Details
          subTitle='Get your dream team of highly skilled professionals'
        >
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
    </>
  )
}

export default StaffAugmentation
