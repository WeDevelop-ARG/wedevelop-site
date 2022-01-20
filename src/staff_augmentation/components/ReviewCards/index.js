import Review from './Review'
import Button from 'main_app/components/Button'

import Image from 'next/image'
import DotsPattern from 'assets/staff_augmentation/dots_pattern.svg'
import { ReactComponent as ReviewsBackground } from 'assets/staff_augmentation/backgrounds/customers_reviews.svg'

import classes from './styles.module.scss'

function ReviewCards ({
  subtitle,
  title,
  description,
  reviews,
  buttonText,
  handleModal
}) {
  return (
    <section id='reviews-section' className={classes.reviewsSection}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>{subtitle}</p>
        <h2 className={classes.titleText}>{title}</h2>
        <p className={classes.descriptionText}>{description}</p>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.cardsContainer}>
        {
          reviews.map(({ id, quote, stars, project }) => (
            <Review
              key={id}
              quote={quote}
              stars={stars}
              project={project}
            />
          ))
        }
      </div>
      <Button
        variant='primary'
        className={classes.freeQuoteButton}
        onClick={handleModal}
      >
        {buttonText}
      </Button>
      <ReviewsBackground preserveAspectRatio='xMidYMin slice' className={classes.background} />
      <Image src={DotsPattern} alt='' className={classes.topLeftDotsPattern} aria-hidden='true' />
      <div className={classes.filledCircle} aria-hidden='true' />
      <div className={classes.emptyCircle} aria-hidden='true' />
      <div className={classes.smallBlurredCircle} aria-hidden='true' />
      <div className={classes.smallCircle} aria-hidden='true' />
    </section>
  )
}

export default ReviewCards
