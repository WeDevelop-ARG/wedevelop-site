import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'

import dottedSemiCircle from 'assets/about_us/areas_of_expertise/dotted-semi-circle.svg'
import heroBackground from 'assets/about_us/areas_of_expertise/hero-background.png'
import DotsPattern from 'assets/about_us/dots_pattern.svg'
import decoElements from 'assets/about_us/nearshore_outsourcing/deco-elements.svg'

import classes from './styles.module.scss'

export default function AreasOfExpertiseHero () {
  return (
    <>
      <section className={classes.areasOfExpertise}>
        <p className={classes.subheadingText}>Our Company</p>
        <div className={classes.sectionHeader}>
          <h2>Our Areas Of Expertise</h2>
          <p className={classes.descriptionText}>
            We help companies innovate and scale by embracing the latest technologies and resources
          </p>
        </div>
        <hr className={classes.horizontalBar} />
        <Button
          as={InternalLink}
          href='/about-us/areas-of-expertise/contact'
          className={classes.letsTalkButton}
        >
          Let's Talk!
        </Button>
        <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.dotsPattern} aria-hidden='true' />
        <WrappedImage src={decoElements} alt='' layout='intrinsic' className={classes.decoElements} aria-hidden='true' />
        <WrappedImage src={dottedSemiCircle} alt='' layout='intrinsic' className={classes.leftDottedSemiCircle} aria-hidden='true' />
      </section>
      <WrappedImage src={heroBackground} alt='' layout='responsive' className={classes.backgroundImage} />
    </>
  )
}
