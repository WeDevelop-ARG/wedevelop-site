import Button from 'main_app/components/Button'
import Funnel from './Funnel'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'

import BlueGradientWithFigures from 'assets/services/blue-gradient-with-figures-background.component.svg'
import DotsPatterns from 'assets/home/dots_pattern.svg'
import HowWeHireCircle from 'assets/services/how-we-hire-circle.svg'

import classes from './styles.module.scss'

export default function Top3PercentageProfessionals ({ ctaLink }) {
  return (
    <section className={classes.howWeHire}>
      <div className={classes.header}>
        <p className={classes.heading}>Top 3% professionals</p>
        <h2 className={classes.title}>How We Hire</h2>
        <hr className={classes.horizontalBar} />
        <h3 className={classes.subtitle}>The TOP <span>3</span>%</h3>
        <p className={classes.description}>
          We've iterated our Vetting Process to make it agile and efficient,
          so that we can guarantee that you get the best LATAM talent!
        </p>
      </div>
      <Funnel />
      <div className={classes.blueSection}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <h5>
              <span>Hiring & Onboarding</span>
            </h5>
            <p>
              Even though the hiring process is finished, our service is not over.
              <span> Our Customer Success Manager will work closely with your team during the ramp-up period, </span>
              as the new member sets up their development environment and gets acquainted
              with the project tools, teammates, and workplace etiquette. We are even willing
              to help the person learn any new tool or technology needed.
            </p>
          </div>
          <div className={classes.content}>
            <h5>
              <span>Customer Service</span>
            </h5>
            <p>
              We are a personalized customer centric company.
              <span> Your feedback will be key and if you think our service did not meet your expectations, we will work with a 15-days trial period. </span>
              In that stage, you can choose a new resources until you are happy with our
              services. It comes with no extra cost and at the same hourly rate.
            </p>
          </div>
        </div>
        <Button
          as={InternalLink}
          href={ctaLink}
          isAnchor
          variant='primary'
          className={classes.ctaButton}
        >
          Let's grow your team today!
        </Button>
        <BlueGradientWithFigures className={classes.background} viewBox='0 0 1680 548' preserveAspectRatio='xMidYMid slice' />
      </div>
      <WrappedImage src={DotsPatterns} alt='' className={classes.dotsPattern} aria-hidden />
      <WrappedImage src={HowWeHireCircle} alt='' className={classes.howWeHireCircle} aria-hidden />
    </section>
  )
}
