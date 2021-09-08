import Button from 'main_app/components/Button'
import DotsPattern from '../../../assets/home/dots_pattern.svg'

import classes from './styles.module.scss'

function FullSizeCTA ({
  title,
  subTitle,
  ctaText,
  description,
  handleModal
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
          smooth
          isAnchor
          variant='primary'
          className={classes.buttonTalk}
          onClick={handleModal}
        >
          {ctaText}
        </Button>
      </div>
      <img src={DotsPattern} alt='' className={classes.topRightPattern} aria-hidden='true' />
      <div className={classes.emptyCircle} />
      <div className={classes.filledBigCircle} />
      <div className={classes.smallBlurRightCircle} />
    </section>
  )
}

export default FullSizeCTA