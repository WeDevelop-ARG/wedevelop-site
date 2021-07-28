import TestimonialsBg from 'assets/home/testimonials_background_image.png'

import classes from './styles.module.scss'

function Testimonials () {
  return (
    <section id='testimonials' className={classes.testimonials}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>Testimonials</p>
        <h2 className={classes.titleText}>What clients say</h2>
        <p className={classes.descriptionText}>
          Duis ornare nunc sed molestie consectetur nulla eget. Tincidunt curabitur.
        </p>
        <hr className={classes.horizontalBar} />
      </div>
      <img src={TestimonialsBg} alt='' className={classes.bottomImg} />
    </section>
  )
}

export default Testimonials
