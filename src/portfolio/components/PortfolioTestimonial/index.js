import isEmpty from 'lodash/isEmpty'

import Image from 'main_app/components/Image'

import DotsPattern from 'assets/portfolio/dots_pattern.svg'
import QuotationMark from 'assets/home/quotation_mark.svg'

import classes from './styles.module.scss'

function PortfolioTestimonial ({ review }) {
  return (
    <section id='portfolio-testimonial' className={classes.portfolioTestimonial}>
      <figure key={review.id} className={classes.review}>
        <div className={classes.quoteContainer}>
          <Image src={QuotationMark} alt='' className={classes.openQuote} />
          <blockquote className={classes.quote}>{review.quote}</blockquote>
          <Image src={QuotationMark} alt='' className={classes.closeQuote} />
        </div>
        {!isEmpty(review.profileImageURL) &&
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
          </div>}
        <figcaption className={classes.profileData}>
          <p>{review.name}</p>
          <p><strong>{review.position}, {review.company}</strong></p>
        </figcaption>
      </figure>
      <Image src={DotsPattern} alt='' className={classes.leftPattern} />
      <Image src={DotsPattern} alt='' className={classes.rightPattern} />
    </section>
  )
}

export default PortfolioTestimonial
