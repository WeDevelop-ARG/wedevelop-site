import { HashLink } from 'react-router-hash-link'

import Review from './Review'
import Button from 'main_app/components/Button'

import DotsPattern from 'assets/staff_augmentation/dots_pattern.svg'

import classes from './styles.module.scss'

function ReviewCards ({ subtitle, title, description, reviews }) {
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
        as={HashLink}
        to='#'
        smooth
        isAnchor
        variant='primary'
        className={classes.freeQuoteButton}
      >
        Get a Free Quote
      </Button>
      <img src={DotsPattern} alt='' className={classes.topLeftDotsPattern} aria-hidden='true' />
      <div className={classes.filledCircle} aria-hidden='true' />
      <div className={classes.emptyCircle} aria-hidden='true' />
      <div className={classes.smallBlurredCircle} aria-hidden='true' />
      <div className={classes.smallCircle} aria-hidden='true' />
    </section>
  )
}

export default ReviewCards
