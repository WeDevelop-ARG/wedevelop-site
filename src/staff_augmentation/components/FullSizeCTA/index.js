import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function FullSizeCTA ({
  title,
  subTitle,
  ctaText,
  ctaToPath = '#top',
  ctaIncentive
}) {
  return (
    <section className={classes.getYourQuoteSection}>
      <div className={classes.container}>
        <div className={classes.leftColumn}>
          <h3 className={classes.subheadingText}>{subTitle}</h3>
          <h2>{title}</h2>
        </div>
        <div className={classes.rightColumn}>
          <Button
            as={HashLink}
            to={ctaToPath}
            smooth
            className={classes.getYourQuoteButton}
          >
            {ctaText}
          </Button>
          {ctaIncentive && <div className={classes.subText}>{ctaIncentive}</div>}
        </div>
      </div>
    </section>
  )
}

export default FullSizeCTA
