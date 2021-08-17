import Hero from './Hero'
import Details from './Details'
import Benefits from 'services/Benefits'
import Schedule from './Schedule'

import webDevelopmentPhoto from 'assets/home/services/web-services.svg'
import webDevelopmentIcon from 'assets/services/icon-web-development.svg'
import webDevelopmentBackground from 'assets/services/web_development_background.png'

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
      <section>
        <Hero
          icon={webDevelopmentIcon}
          photo={webDevelopmentPhoto}
          background={webDevelopmentBackground}
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