import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import useReviews from './hooks/useReviews'
import QuotationMark from 'assets/home/quotation_mark.svg'
import DotsPattern from 'assets/home/dots_pattern.svg'

import classes from './styles.module.scss'
import Image from '../Image'

function Testimonials ({ bottomImageURL, hideHeader = false }) {
  const { reviews } = useReviews()
  return (
    <section id='testimonials' className={classes.testimonials}>
      {!hideHeader &&
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>Testimonials</p>
          <h2 className={classes.titleText}>What clients say</h2>
          <p className={classes.descriptionText}>
            Don't take our word for it. See what our customers say.
          </p>
          <hr className={classes.horizontalBar} />
        </div>}
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
          {reviews.map((review) => (
            <figure key={review.id} className={classes.slide}>
              <div className={classes.quoteContainer}>
                <Image src={QuotationMark} alt='' className={classes.openQuote} />
                <blockquote className={classes.quote}>{review.quote}</blockquote>
                <Image src={QuotationMark} alt='' className={classes.closeQuote} />
              </div>
              <div className={classes.profileImgContainer}>
                <Image
                  src={review.profileImageURL}
                  objectFit='cover'
                  alt={`Profile of ${review.name}`}
                  title={review.name}
                  className={classes.profileImg}
                />
                <div className={classes.filledProfileCircle} aria-hidden='true' />
                <div className={classes.emptyProfileCircle} aria-hidden='true' />
              </div>
              <figcaption className={classes.profileData}>
                <p>{review.name}</p>
                <p><strong>{review.position}, {review.company}</strong></p>
              </figcaption>
            </figure>
          ))}
        </Slide>
      </div>
      <Image src={DotsPattern} alt='' className={classes.topRightPattern} aria-hidden='true' />
      <Image src={DotsPattern} alt='' className={classes.middleLeftPattern} aria-hidden='true' />
      <div className={classes.filledSmallCircle} aria-hidden='true' />
      <div className={classes.emptySmallCircle} aria-hidden='true' />
      <div className={classes.smallBlurLeftCircle} aria-hidden='true' />
      <div className={classes.filledBigCircle} aria-hidden='true' />
      <div className={classes.emptyBigCircle} aria-hidden='true' />
      <div className={classes.smallCircle} aria-hidden='true' />
      <div className={classes.smallBlurRightCircle} aria-hidden='true' />
    </section>
  )
}

export default Testimonials
