import { useMemo } from 'react'
import { isUndefined, isEmpty, isNil } from 'lodash'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Button from '../Button'
import DefaultDecoration from './DefaultDecoration'
import InternalLink from '../InternalLink'
import WrappedImage from '../WrappedImage'

import QuotationMark from 'assets/home/quotation_mark.svg'

import classes from './styles.module.scss'

function Testimonials ({
  heading,
  title,
  description,
  ctaText,
  ctaLink,
  reviews,
  customDecorations,
  hideHeader = false,
  showCta = false,
  hideSubtitle = false
}) {
  const isAutoplay = useMemo(() => {
    return !(reviews.length === 1)
  }, [reviews])
  const decorations = useMemo(() => {
    if (isUndefined(customDecorations)) return <DefaultDecoration />
    return customDecorations
  }, [customDecorations])

  return (
    <section id='testimonials' className={classes.testimonials}>
      {!hideHeader &&
        <div className={classes.sectionHeader}>
          <p className={classes.headingText}>{!isNil(heading) ? heading : 'Testimonials'}</p>
          <h2 className={classes.titleText}>{!isNil(title) ? title : 'What our clients say'}</h2>
          {!hideSubtitle && (
            <p className={classes.descriptionText}>
              {!isNil(description)
                ? description
                : 'Don\'t take our word for it, see what our customers have to say.'}
            </p>)}
          <hr className={classes.horizontalBar} />
        </div>}
      <div>
        <Slide
          duration={5000}
          transitionDuration={500}
          autoplay={isAutoplay}
          canSwipe={isAutoplay}
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
      {showCta &&
        <Button
          as={InternalLink}
          href={ctaLink}
          isAnchor
          variant='primary'
          className={classes.ctaButton}
          link={{ scroll: false, shallow: true }}
        >
          {ctaText}
        </Button>}
      {decorations}
    </section>
  )
}

export default Testimonials
