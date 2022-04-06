import { useCallback } from 'react'
import Article from 'main_app/components/Article'

import Benefits from '../components/benefits'
import ContactModal from 'main_app/components/ContactModal'
import Details from '../components/details'
import Hero from '../components/hero'
import OurProcess from '../components/ourProcess'
import PictureWall from 'main_app/components/PictureWall'
import Schedule from '../components/schedule'
import WebDevDetails from '../components/details/components/WebDevDetails'

import photo from 'assets/services/web-services.svg'
import icon from 'assets/services/icon-web-development.svg'
import background from 'assets/services/web-development-background.png'
import NavBar from 'main_app/components/NavBar'
import Footer from 'main_app/components/Footer'
import PageMetadata from 'utils/marketing/PageMetadata'

import classes from './services.module.scss'
import { useRouter } from 'next/router'

function WebDevelopment () {
  const SERVICE_NAME = 'web-development'
  const contactPagePath = '/services/web-development/contact'
  const { pathname, push } = useRouter()

  const handleClose = useCallback(() => {
    push('/services/web-development')
  }, [push])

  return (
    <>
      <PageMetadata
        title='Agile Web Development'
        description='We create high-quality Digital Products through our Agile Web Development services, delivering meaningful experiences to clients and users all over the world.'
      />
      <NavBar
        variant={['solid', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
        <Hero
          service={SERVICE_NAME}
          className={classes.sectionContainer}
          icon={icon}
          photo={photo}
          background={background}
          title={<>Web <br />Development</>}
          description='We understand how important it is for businesses to get competitive web solutions. Our expertise and talent ensures the most agile development process possible.'
          contactPagePath={contactPagePath}
        />
        <section className={classes.sectionContainer}>
          <Details
            subTitle='Custom Web Services, from basic informational websites to complex web applications.'
          >
            <WebDevDetails contactPagePath={contactPagePath} />
          </Details>
        </section>
        <OurProcess />
        <Benefits className={classes.sectionContainer} service='web-development' />
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

export default WebDevelopment
