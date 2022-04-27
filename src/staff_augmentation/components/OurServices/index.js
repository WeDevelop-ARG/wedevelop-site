import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Agreement from 'assets/staff_augmentation/our_services/agreement.component.svg'
import Communication from 'assets/staff_augmentation/our_services/communication.component.svg'
import DecoElements from 'assets/staff_augmentation/our_services/deco-elements.component.svg'
import Globe from 'assets/staff_augmentation/our_services/globe_magnifying_glass.component.svg'
import TableConversation from 'assets/staff_augmentation/our_services/table_conversation.component.svg'
import Skills from 'home/components/Skills'

import classes from './styles.module.scss'

export default function OurServices () {
  return (
    <section className={classes.container} id='our-services'>
      <ul className={classes.cards}>
        <li>
          <Globe className={classes.image} viewBox='0 0 100 100' />
          <span className={classes.tag}>Top 3% Devs</span>
          Recruitment &amp; Selection<br />of LATAM Engineers
        </li>
        <li>
          <Agreement className={classes.image} viewBox='0 0 100 100' />
          Local Hiring:<br />Contracting &amp; Compliance
        </li>
        <li>
          <TableConversation className={classes.image} viewBox='0 0 92 104' />
          Periodically 1:1<br />People Care meetings
        </li>
        <li>
          <Communication className={classes.image} viewBox='0 0 100 100' />
          Constant<br />Communication
        </li>
        <DecoElements className={classes.decoElements} />
      </ul>
      <div className={classes.mainContainer}>
        <h3>we strive to excellence</h3>
        <h2>Nearshore Outsourcing</h2>
        <p>
          Get access to a white-glove service. Build your teams with the top 3% LATAM Talent.
        </p>
        <p>IT Staff Augmentation done well.</p>
        <hr />
        <ul>
          <li>Highly skilled developers.</li>
          <li>Excellent communication skills.</li>
          <li>Timezone alignment.</li>
          <li>Great prices.</li>
        </ul>
      </div>
      <div className={classes.needHelpIfFull}>
        <h3>You may need our help if:</h3>
        <ul>
          <li>You need help to find offshore/nearshore talent.</li>
          <li>You can’t/won’t afford local talent.</li>
          <li>You want to transition to  remote teams.</li>
          <li>You need to develop high-quality solutions.</li>
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
            'I need help to find offshore/nearshore talent.',
            'I can’t/won’t afford local talent.',
            'I want to transition to  remote teams.',
            'I need to develop high-quality solutions.'
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
    </section>
  )
}
