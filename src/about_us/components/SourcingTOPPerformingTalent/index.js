import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import classes from './styles.module.scss'

function SourcingTOPPerformingTalent () {
  const slidesText = [
    {
      content: (
        <p className={classes.contentText}>
          Latin America is home to some of the most talented tech professionals, and
          at WeDevelop,&nbsp;
          <span className={classes.boldText}>
            we help you dive and explore the options available.
          </span>
          <br /><br />
          We&nbsp;
          <span className={classes.boldText}>
            deliver bespoke solutions oriented to creating a perfect match
          </span>
          &nbsp;between candidates and companies, helping both parties thrive.
        </p>
      )
    },
    {
      content: (
        <p className={classes.contentText}>
          On the one hand, developers get competitive salaries and hiring
          conditions. While on the other hand, companies get highly skilled
          professionals avoiding the hassle of recruiting, training, and
          onboarding a new team member.
          <br /><br />
          Our staff is committed to your success,
          with experienced outsourcing specialists ready to provide bespoke solutions.
        </p>
      )
    },
    {
      content: (
        <p className={classes.contentText}>
          Nearshore staffing is the go-to option for businesses of all sizes.
          Reduce time to market on your next tech product development, and
          increase revenue while helping developers with their career growth.
        </p>
      )
    },
    {
      content: (
        <p className={classes.contentText}>
          WeDevelop not only focuses on cutting costs and helping companies
          save time. We also have a human-centered approach that makes us go
          the extra mile to help our clients succeed.
        </p>
      )
    },
    {
      content: (
        <p className={classes.contentText}>
          When you reach us for nearshore your projects with the best Latin American tech
          professionals, you access a vast talent pool qualified in the most in-demand
          technologies. Avoid the cumbersome process of trial and error when hiring on-shore
          and offshore talent, and get on board a team aligned with your vision and mission,
          committed to the success of your project.
        </p>
      )
    }
  ]

  return (
    <section className={classes.section}>
      <div className={classes.sectionHeader}>
        <h2>
          Sourcing TOP Performing Talent in Latin America
        </h2>
        <hr className={classes.horizontalBar} />
      </div>
      <div>
        <Slide
          duration={7500}
          transitionDuration={500}
          pauseOnHover
          indicators
          canSwipe
          arrows={false}
          className={classes.carousel}
        >
          {slidesText.map(slideText => slideText.content)}
        </Slide>
      </div>
      <div className={classes.background} />
    </section>
  )
}

export default SourcingTOPPerformingTalent
