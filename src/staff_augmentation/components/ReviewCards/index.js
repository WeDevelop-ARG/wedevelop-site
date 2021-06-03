import Review from './Review'

import classes from './styles.module.scss'

function ReviewCards ({ title, reviews }) {
  return (
    <section id='reviews-section' className={classes.reviewsSection}>
      <h3 className={classes.titleText}>{title}</h3>
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
    </section>
  )
}

export default ReviewCards
