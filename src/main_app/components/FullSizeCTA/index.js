import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function FullSizeCTA ({
  title,
  subTitle,
  ctaText,
  ctaToPath = '#top',
  description
}) {
  return (
    <section className={classes.getInTouch}>
      <div className={classes.sectionContent}>
        <p className={classes.subheadingText}>{subTitle}</p>
        <h2 className={classes.titleText}>{title}</h2>
        <p className={classes.descriptionText}>
          {description}
        </p>
        <hr className={classes.horizontalBar} />
        <Button
          as={HashLink}
          to={ctaToPath}
          smooth
          isAnchor
          variant='primary'
          className={classes.buttonTalk}
        >
          {ctaText}
        </Button>
      </div>
    </section>
  )
}

export default FullSizeCTA
