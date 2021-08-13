import Button from 'main_app/components/Button'
import { HashLink } from 'react-router-hash-link'
import webServices from 'assets/home/services/web-services.svg'
import iconWebDevelopment from 'assets/services/icon-web-development.svg'
import backGround from 'assets/services/web_development_background.png'

import iconCostReduction from 'assets/services/icon-cost-reduction.svg'
import iconExperts from 'assets/services/icon-experts.svg'
import iconTime from 'assets/services/icon-time.svg'
import iconRecruitmentCost from 'assets/services/icon-recruitment-cost.svg'
import iconAgile from 'assets/services/icon-agile.svg'
import backgroundKeyBenefits from 'assets/services/background_key_featured_benefits.png'
import picturesWall from 'assets/services/pictures-wall.png'

function WebDevelopment() {
  return (
    <>
      <section>
        <img className="" src={iconWebDevelopment} alt='' />
        <img className="" src={webServices} alt='' />
        <h2>Web Development</h2>
        <p>
          We understand how important it is for businesses to get a competitive web solution. Our expertise and talent ensures the most agile development process.
        </p>
        <Button
          as={HashLink}
          to='/contact'
          smooth
          isAnchor
          variant='primary'
        >
          Get in Touch
          </Button>
        <img className="" src={backGround} alt='' />
      </section>
      <section>
        <p>
          Key featured
        </p>
        <h2>Service Details</h2>
        <p>Custom Web Services, from basic informational websites to complex web applications.</p>
        <hr />
        <p>
          Agile custom web development, no waste, continuous improvement and respect for people.
        </p>
        <p>
          Whether you need a new website, a web portal to help your employees, or an app to automate processes, our developers have the expertise and experience to build it rapidly and aligned to your vision.
        </p>
        <ul>
          <li>Project management</li>
          <li>UX Research</li>
          <li>UI/UX Design</li>
          <li>End to End Development</li>
          <li>QA</li>
          <li>Maintenance</li>
          <li>Business Analysis</li>
        </ul>
      </section>

      <section>
        <h3>Our Process</h3>
      </section>

      <section>
        <p>Key featured</p>
        <h3>Benefits</h3>
        <div>
          <div>
            <img src={iconCostReduction} alt="" />
            Cost and risk reduction
            </div>
          <di>
            <img src={iconTime} alt="" />
          More time to prioritize your own project</di>
          <div>
            <img src={iconExperts} alt="" />
          Highly skilled experts with a proficient english level</div>
          <div>
            <img src={iconRecruitmentCost} alt="" />
          No recruitment cost</div>
          <div>
            <img src={iconAgile} alt="" />
          Agile scale up/down</div>
        </div>
        <img src={backgroundKeyBenefits} alt="" />
      </section>

      <section>
        <p>get in touch</p>
        <h3>Hire your new <span>Full-Stack Developer</span> now!</h3>
        <p>Vitae habitant blandit adipiscing porta. Nulla tortor, eu consectetur nunc. </p>
        <hr />
        <Button
          as={HashLink}
          to='/contact'
          smooth
          isAnchor
          variant='primary'
        >
          Get in Touch
          </Button>
        <img src={picturesWall} alt="" />
      </section>
    </>
  )
}

export default WebDevelopment