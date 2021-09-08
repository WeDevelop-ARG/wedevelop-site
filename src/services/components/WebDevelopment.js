import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import ContactModal from 'main_app/components/ContactModal'

import Hero from './hero'
import Details from './details'
import Benefits from './benefits'
import Schedule from './schedule'
import WebDevDetails from './details/components/WebDevDetails'
import usePageMetadata from 'utils/marketing/use_page_metadata'
import PictureWall from 'main_app/components/PictureWall'

import photo from 'assets/services/web-services.svg'
import icon from 'assets/services/icon-web-development.svg'
import background from 'assets/services/web-development-background.png'

import classes from './services.module.scss'

function WebDevelopment () {
  usePageMetadata({
    title: 'Agile Web Development',
    description: 'We create high-quality Digital Products through our Agile Web Development services, delivering meaningful experiences to clients and users all over the world.'
  })
  const SERVICE_NAME = 'web-development'
  const contactPagePath = '/services/web-development/contact'
  const match = useRouteMatch(contactPagePath)
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/services/web-development')
  }, [history])

  return (
    <>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Hero
        service={SERVICE_NAME}
        className={classes.sectionContainer}
        icon={icon}
        photo={photo}
        background={background}
        title={<>Web <br />Development</>}
        description='We understand how important it is for businesses to get a competitive web solution. Our expertise and talent ensures the most agile development process.'
        contactPagePath={contactPagePath}
      />
      <section className={classes.sectionContainer}>
        <Details
          subTitle='Custom Web Services, from basic informational websites to complex web applications.'
        >
          <WebDevDetails contactPagePath={contactPagePath} />
        </Details>
      </section>
      <Benefits className={classes.sectionContainer} service='web-development' />
      <Schedule
        className={classes.sectionContainer}
        contactPagePath={contactPagePath}
        service={SERVICE_NAME}
      />
      <PictureWall />
    </>
  )
}

export default WebDevelopment
