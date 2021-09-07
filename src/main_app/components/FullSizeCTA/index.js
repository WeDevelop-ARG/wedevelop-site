import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import DotsPattern from '../../../assets/home/dots_pattern.svg'

import classes from './styles.module.scss'
import useVariants from 'utils/use_variants'
import classnames from 'classnames'

function FullSizeCTA ({
  title,
  subTitle,
  ctaText,
  ctaToPath = '#top',
  description,
  variant,
  className
}) {
  className = classnames(
    classes.containerStyle,
    useVariants(classes, variant, { prefix: 'variant_' }),
    className
  )
  return (
    <section className={classnames(classes.getInTouch, className)}>
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
      <img src={DotsPattern} alt='' className={classes.topRightPattern} aria-hidden='true' />
      <img src={DotsPattern} alt='' className={classes.leftPattern} aria-hidden='true' />
      <img src={DotsPattern} alt='' className={classes.rightPattern} aria-hidden='true' />
      <div className={classes.shapes}>
        <div className={classes.emptyCircle} />
        <div className={classes.filledBigCircle} />
        <div className={classes.smallBlurRightCircle} />
      </div>
    </section>
  )
}

export default FullSizeCTA
