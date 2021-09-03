import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import ContactModal from 'main_app/components/ContactModal'

import Hero from './hero'
import Details from './details'
import StaffDetails from './details/components/StaffDetails'
import SimpleSteps from './simpleSteps'
import Benefits from './benefits'
import Schedule from './schedule'
import PictureWall from 'main_app/components/PictureWall'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import photo from 'assets/services/photo-staff-augmentation.svg'
import icon from 'assets/services/icon-staff-augmentation.svg'
import background from 'assets/services/background-staff-augmentation.png'

import classes from './services.module.scss'
import classNames from 'classnames'

function StaffAugmentation () {
  usePageMetadata({
    title: 'Staff Augmentation',
    description: 'A solid IT Staffing Agency building up the most agile and efficient teams in the world. Get a free quote within the next hour.'
  })
  const SERVICE_NAME = 'staff-augmentation'
  const contactPagePath = '/services/staff-augmentation/contact'
  const match = useRouteMatch(contactPagePath)
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/services/staff-augmentation')
  }, [history])

  return (
    <>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
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
      <section className={classNames(classes.sectionContainer, classes.serviceDetails)}>
        <Details
          subTitle='Get your dream team of highly skilled professionals'
        >
          <StaffDetails />
        </Details>
      </section>
      <SimpleSteps className={classes.sectionContainer} />
      <Benefits className={classes.sectionContainer} />
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
