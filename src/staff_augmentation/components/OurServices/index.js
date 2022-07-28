import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Agreement from 'assets/staff_augmentation/our_services/agreement.component.svg'
import Communication from 'assets/staff_augmentation/our_services/communication.component.svg'
import DecoElements from 'assets/staff_augmentation/our_services/deco-elements.component.svg'
import Globe from 'assets/staff_augmentation/our_services/globe_magnifying_glass.component.svg'
import TableConversation from 'assets/staff_augmentation/our_services/table_conversation.component.svg'
import Skills from 'home/components/Skills'
import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

export default function OurServices() {
  return (
    <section className={classes.container} id='our-services'>
      <ul className={classes.cards}>
        <li>
          <Globe className={classes.image} viewBox='0 0 100 100' />
          <span className={classes.tag}>Hire the top 3% Talent</span>
          Recruitment &amp; Selection<br />of LATAM Engineers
        </li>
        <li>
          <Agreement className={classes.image} viewBox='0 0 100 100' />
          We handle the hiring, administrative, and compliance requirements
        </li>
        <li>
          <TableConversation className={classes.image} viewBox='0 0 92 104' />
          Expert People Care team to support engineers
        </li>
        <li>
          <Communication className={classes.image} viewBox='0 0 100 100' />
          Fluent Communication &amp; Feedback
        </li>
        <DecoElements className={classes.decoElements} />
      </ul>
      <div className={classes.mainContainer}>
        <h3>we strive for excellence</h3>
        <h2>Nearshore Outsourcing</h2>
        <p>
          Get access to a world-class service. Build your tech teams with the top 3% of LatAm talent.
        </p>
        <p>Top Tier Staff Augmentation.</p>
        <hr />
        <ul>
          <li>Highly skilled developers.</li>
          <li>Excellent communication skills.</li>
          <li>Timezone alignment.</li>
          <li>Cost-effective.</li>
        </ul>
      </div>
      <div className={classes.needHelpIfFull}>
        <h3>You may need our help if:</h3>
        <ul>
          <li>You want to find nearshore talent</li>
          <li>You want to expand your local team</li>
          <li>You want to lower your hiring costs</li>
          <li>You need to develop high-quality solutions</li>
        </ul>
      </div>
      <div className={classes.needHelpIfSlides}>
        <h3>You may need our help if...</h3>
        <Slide
          duration={5000}
          transitionDuration={500}
          autoplay
          canSwipe
          pauseOnHover
          indicators
          arrows={false}
          className={classes.carousel}
        >
          {[
            'You want to find nearshore talent',
            'You want to expand your local team',
            'You want to lower your hiring costs',
            'You need to develop high-quality solutions'
          ].map(text => (
            <div key={text} className={classes.quoteContainer}>
              <p className={classes.quote}>
                {text}
              </p>
            </div>
          ))}
        </Slide>
      </div>
      <Skills
        className={classes.skills}
        logoClassName={classes.skillLogo}
        skillClassName={classes.skill}
        showNames
        grayscaleEffect={false}
      />
      <div className={classes.costEffectiveCTAButton}>
        <p>Hire Cost-Efficent &amp; Experienced Softward Developers</p>
        <Button
          variant='primary'
          className={classes.buttonTalk}
          onClick={() => { }}
        >
          Get in touch
        </Button>
      </div>
    </section>
  )
}
