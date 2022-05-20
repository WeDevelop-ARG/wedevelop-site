import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import WrappedImage from 'main_app/components/WrappedImage'

import Stars from '../ReviewCards/Review/Stars'

import classes from './styles.module.scss'

import { testimonials } from './testimonials'

export default function Testimonials () {
  return (
    <section className={classes.container}>
      <h2>Testimonials</h2>
      <Slide
        duration={5000}
        transitionDuration={500}
        autoplay
        canSwipe
        pauseOnHover
        indicators
        arrows={false}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }
        ]}
        className={classes.carousel}
      >
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className={classes.quoteContainer}>
            <div className={classes.content}>
              <p className={classes.quote}>
                {testimonial.quote}
              </p>
              <h3>
                <b>{testimonial.project.type}</b>
                <span>{' '}for {testimonial.project.company}</span>
              </h3>
              <Stars starsNumber={testimonial.stars} />
            </div>
            <div className={classes.imagesContainer}>
              <WrappedImage src={testimonial.logo} layout='responsive' alt='' className={classes.logo} />
              <WrappedImage src={testimonial.picture} layout='responsive' alt='' className={classes.picture} />
            </div>
          </div>
        ))}
      </Slide>
    </section>
  )
}
