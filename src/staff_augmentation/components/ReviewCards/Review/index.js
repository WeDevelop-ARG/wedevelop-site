import Stars from './Stars'

import classes from './styles.module.scss'

function Review ({ quote, stars, project }) {
  return (
    <div className={classes.review}>
      <p className={classes.quote}>
        {quote}
      </p>
      <Stars starsNumber={stars} />
      <div className={classes.project}>
        <p>{project}</p>
      </div>
    </div>
  )
}

export default Review
