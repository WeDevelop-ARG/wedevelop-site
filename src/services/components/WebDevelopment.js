import Hero from './hero'
import Details from './details'
import Benefits from './benefits'
import Schedule from './schedule'
import WebDevDetails from './details/components/WebDevDetails'
import OurProcess from './ourProcess'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import photo from 'assets/services/web-services.svg'
import icon from 'assets/services/icon-web-development.svg'
import background from 'assets/services/web-development-background.png'

import classes from './services.module.scss'

function WebDevelopment() {
  usePageMetadata({
    title: 'Web Development',
    description: 'TBD'
  })

  return (
    <>
      <section className={classes.sectionContainer}>
        <Hero
          service="webDev"
          icon={icon}
          photo={photo}
          background={background}
          title={<>Web <br />Development</>}
          description="We understand how important it is for businesses to get a competitive web solution. Our expertise and talent ensures the most agile development process."
        />
      </section>
      <section className={classes.sectionContainer}>
        <Details
          subTitle="Custom Web Services, from basic informational websites to complex web applications."
        >
          <WebDevDetails />
        </Details>
      </section>

      <section className={classes.sectionContainer}>
        <OurProcess />
      </section>

      <section className={classes.sectionContainer}>
        <Benefits />
      </section>

      <section className={classes.sectionContainer}>
        <Schedule />
      </section>
    </>
  )
}

export default WebDevelopment
