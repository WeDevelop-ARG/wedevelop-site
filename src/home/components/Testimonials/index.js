import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import useReviews from '../../hooks/useReviews'
import TestimonialsBg from 'assets/home/testimonials_background_image.png'

import classes from './styles.module.scss'

function Testimonials () {
  const { reviews } = useReviews()
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
      <div>
        <Slide
          duration={5000}
          transitionDuration={500}
          autoplay
          pauseOnHover
          indicators
          arrows={false}
          className={classes.carousel}
        >
          {reviews.map((review, i) => (
            <figure key={i} className={classes.slide}>
              <blockquote className={classes.quote}>{review.quote}</blockquote>
              <img
                src={review.profileImageURL}
                alt={`Profile image of ${review.name}`}
                title={review.name}
                className={classes.profileImg}
              />
              <figcaption className={classes.profileData}>
                <p>{review.name}</p>
                <p><strong>{review.position}, {review.company}</strong></p>
              </figcaption>
            </figure>
          ))}
        </Slide>
      </div>
      <img src={TestimonialsBg} alt='' className={classes.bottomImg} />
    </section>
  )
}

export default Testimonials
