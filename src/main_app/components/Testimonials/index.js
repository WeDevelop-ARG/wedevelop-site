import { useMemo } from 'react'
import { isUndefined, isEmpty } from 'lodash'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import DefaultDecoration from './DefaultDecoration'

import QuotationMark from 'assets/home/quotation_mark.svg'

import classes from './styles.module.scss'
import WrappedImage from '../WrappedImage'

function Testimonials ({ reviews, customDecorations, hideHeader = false }) {
  const isAutoplay = useMemo(() => {
    if (reviews.length === 1) return false
    return true
  }, [reviews])
  const decorations = useMemo(() => {
    if (isUndefined(customDecorations)) return <DefaultDecoration />
    return customDecorations
  }, [customDecorations])

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
          autoplay={isAutoplay}
          pauseOnHover
          indicators={isAutoplay}
          arrows={false}
          className={classes.carousel}
        >
          {reviews.map((review) => (
            <figure key={review.id} className={classes.slide}>
              <div className={classes.quoteContainer}>
                <WrappedImage src={QuotationMark} alt='' layout='fill' className={classes.openQuote} />
                <blockquote className={classes.quote}>{review.quote}</blockquote>
                <WrappedImage src={QuotationMark} alt='' layout='fill' className={classes.closeQuote} />
              </div>
              {!isEmpty(review.profileImageURL) &&
                <div className={classes.profileImgContainer}>
                  <WrappedImage
                    src={review.profileImageURL}
                    objectFit='cover'
                    alt={`Profile of ${review.name}`}
                    title={review.name}
                    className={classes.profileImg}
                  />
                  <div className={classes.filledProfileCircle} aria-hidden='true' />
                  <div className={classes.emptyProfileCircle} aria-hidden='true' />
                </div>}
              <figcaption className={classes.profileData}>
                <p>{review.name}</p>
                <p><strong>{review.position}, {review.company}</strong></p>
              </figcaption>
            </figure>
          ))}
        </Slide>
      </div>
      {decorations}
    </section>
  )
}

export default Testimonials
