import Image from 'main_app/components/Image'
import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'
import Skills from '../Skills'

import staffAugmentationService from 'assets/home/services/staff-augmentation.svg'
import dotsPattern from 'assets/home/dots_pattern.svg'
import rightArrow from 'assets/about_us/nearshore_outsourcing/right_arrow.svg'
import dottedSemiCircle from 'assets/home/dotted-semi-circle.svg'
import filledSemiCircle from 'assets/home/filled-semi-circle.svg'

import classes from './styles.module.scss'

export default function StaffAugmentationService () {
  return (
    <>
      <section id='staff-augmentation-service' className={classes.section}>
        <div className={classes.content}>
          <section className={classes.title}>
            <p className={classes.introTitle}>services</p>
            <div className={classes.text}>
              <h2>Staff Augmentation Services</h2>
              <p className={classes.subtitle}>
                Boost your projects and access on demand skilled
                IT talent while reducing costs.
              </p>
            </div>
            <hr className={classes.horizontalBar} />
          </section>
          <section className={classes.learnMore}>
            <p className={classes.text}>Learn more about how we build unique teams</p>
            <Button
              as={InternalLink}
              href='/services/staff-augmentation'
            >
              Learn More
            </Button>
          </section>
        </div>
        <Image src={staffAugmentationService} alt='' width='400px' height='289px' className={classes.staffAugmentationService} />
        <WrappedImage src={dotsPattern} layout='intrinsic' className={classes.dotsPattern} />
        <WrappedImage src={dottedSemiCircle} layout='intrinsic' className={classes.dottedSemiCircle} />
        <WrappedImage src={filledSemiCircle} layout='intrinsic' className={classes.filledSemiCircle} />
      </section>
      <section className={classes.skills}>
        <Skills className={classes.skillList} />
        <span className={classes.tailorMadeSolutions}>
          <span className={classes.text}>...and other tailor made solutions!</span>
          <Button
            as={InternalLink}
            variant='link'
            href='/services/our-technologies'
            className={classes.button}
          >
            <div className={classes.seeMoreButton}>
              <p className={classes.text}>See More</p>
              <Image
                src={rightArrow}
                alt='right arrow'
                className={classes.arrow}
              />
            </div>
          </Button>
        </span>
      </section>
    </>
  )
}
