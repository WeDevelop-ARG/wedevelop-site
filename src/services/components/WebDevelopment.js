import Hero from './hero'
import Details from './Details'
import Benefits from 'services/Benefits'
import Schedule from './Schedule'

import photo from 'assets/services/web-services.svg'
import icon from 'assets/services/icon-web-development.svg'
import background from 'assets/services/web_development_background.png'

import classes from './WebDevelopment.module.scss'

import picturesWall from 'assets/services/pictures-wall.png'


const SERVICES_LIST = [
  {
    name: 'Project management'
  },
  {
    name: 'UX Research'
  },
  {
    name: 'UI/UX Design'
  },
  {
    name: 'End to End Development'
  },
  {
    name: 'QA'
  },
  {
    name: 'Maintenance'
  },
  {
    name: 'Business Analysis'
  }
]

function WebDevelopment() {
  return (
    <>
      <section className={classes.sectionHero}>
        <Hero
          icon={icon}
          photo={photo}
          background={background}
          title="Web Development"
          description="We understand how important it is for businesses to get a competitive web solution. Our expertise and talent ensures the most agile development process."
        />
      </section>
      <section>
        <Details
          title="Service Details"
          subTitle="Custom Web Services, from basic informational websites to complex web applications."
          description="Agile custom web development, no waste, continuous improvement and respect for people.
          Whether you need a new website, a web portal to help your employees, or an app to automate processes, our developers have the expertise and experience to build it rapidly and aligned to your vision."
          servicesList={SERVICES_LIST}
        />
      </section>

      <section>
        <h3>Our Process</h3>
      </section>

      <section>
        <Benefits />
      </section>

      <section>
        <Schedule />
      </section>

      <section>
        <img src={picturesWall} alt="" />
      </section>
    </>
  )
}

export default WebDevelopment