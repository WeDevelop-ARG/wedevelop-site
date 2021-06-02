import Review from './Review'
import useReviews from './use_reviews'

import classes from './styles.module.scss'

function ReviewCards () {
  const reviews = useReviews()
  return (
    <section id='reviews-section' className={classes.reviewsSection}>
      <h3 className={classes.titleText}>
        The top IT Staff Augmentation Agency so they say...
      </h3>
      <div className={classes.cardsContainer}>
        {
          reviews.map(({ index, quote, stars, project }) => (
            <Review
              key={index}
              quote={quote}
              stars={stars}
              project={project}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ReviewCards
