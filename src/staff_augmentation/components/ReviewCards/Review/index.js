import Stars from './Stars'

import QuotationMark from 'assets/staff_augmentation/quotation_mark.png'

import classes from './styles.module.scss'

function Review ({ quote, stars, project }) {
  return (
    <div className={classes.review}>
      <img src={QuotationMark} alt='' className={classes.openQuote} />
      <p className={classes.quote}>
        {quote}
      </p>
      <img src={QuotationMark} alt='' className={classes.closeQuote} />
      <div>
        <Stars starsNumber={stars} />
        <div className={classes.projectInfo}>
          <p><b>{project.type}</b></p>
          <p>for {project.company}</p>
        </div>
      </div>
    </div>
  )
}

export default Review
