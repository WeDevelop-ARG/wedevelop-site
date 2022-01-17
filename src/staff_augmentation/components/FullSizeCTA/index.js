import Button from 'main_app/components/Button'
import classes from './styles.module.scss'
import useVariants from 'utils/use_variants'
import classnames from 'classnames'

function FullSizeCTA({
  title,
  subTitle,
  ctaText,
  ctaToPath = '#top',
  description,
  variant,
  className,
  handleModal
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
        <p className={classes.descriptionText}>{description}</p>
        <hr className={classes.horizontalBar} />
        <Button
          variant='primary'
          className={classes.buttonTalk}
          onClick={handleModal}
        >
          {ctaText}
        </Button>
      </div>
    </section>
  )
}

export default FullSizeCTA
