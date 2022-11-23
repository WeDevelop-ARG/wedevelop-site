import WrappedImage from 'main_app/components/WrappedImage'

import circleDeco from 'assets/services/benefits-circle-left.svg'
import LatamMap from 'assets/staff_augmentation/latam_map.svg'

import classes from './styles.module.scss'

function WhyHireWeDevelop () {
  return (
    <>
      <section className={classes.whyHireWeDevelop}>
        <div className={classes.mainContainer}>
          <div className={classes.imageContainer}>
            {/* ask why the image disappears when layout='fill' is added */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LatamMap.src} className={classes.map} alt='' />
          </div>
          <div className={classes.textContainer}>
            <p className={classes.header}>Why us</p>
            <p className={classes.title}>Why Hire WeDevelop IT Staff Augmentation Solutions?</p>
            <div className={classes.body}>
              <p>WeDevelop is not just another IT staffing company.
                <b> We are your strategic partners for staff augmentation services sourcing the most skilled professionals in Latin America.</b>
              </p>
              <p>Our core goal is to help you build a proficient team customizing our top-quality solutions to your requirements. With a comprehensive and human-centered approach,
                <b>we deliver end-to-end staffing solutions</b>
                , understanding that every business has unique needs.
              </p>
            </div>
            <hr className={classes.horizontalBar} />
          </div>
        </div>
        <WrappedImage src={circleDeco} className={classes.decoImage} alt='' />
      </section>
    </>
  )
}

export default WhyHireWeDevelop
