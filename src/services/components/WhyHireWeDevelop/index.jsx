import WrappedImage from 'main_app/components/WrappedImage'

import circleDeco from 'assets/services/benefits-circle-left.svg'
import LatamMap from 'assets/staff_augmentation/latam_map.component.svg'

import classes from './styles.module.scss'

function WhyHireWeDevelop () {
  return (
    <>
      <section className={classes.whyHireWeDevelop}>
        <LatamMap className={classes.map} viewBox='108.762 180.76 795.546 1016.28' preserveAspectRatio='xMinYMin meet' />
        <div className={classes.content}>
          <p className={classes.header}>Why us</p>
          <p className={classes.title}>Why Hire WeDevelop IT Talent Solutions?</p>
          <div className={classes.body}>
            <p>We are your strategic partner for <b>hiring the most skilled professionals in Latin America.</b></p>
            <br />
            <p>Our core goal is to help you build a proficient team customizing our top-quality solutions to your requirements. With a comprehensive and human-centered approach,
              <b> we deliver end-to-end staffing solutions</b>
              , understanding that every business has unique needs.
            </p>
          </div>
          <hr className={classes.horizontalBar} />
        </div>
        <WrappedImage src={circleDeco} className={classes.decoImage} alt='' />
      </section>
    </>
  )
}

export default WhyHireWeDevelop
