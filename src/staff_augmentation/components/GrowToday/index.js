import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function GrowToday ({
  subheadingText,
  titleText,
  descriptionText,
  contentText,
  buttonText,
  handleModal
}) {
  return (
    <section id='grow-today' className={classes.growToday}>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>{subheadingText}</p>
          <h2 className={classes.titleText}>{titleText}</h2>
          <p className={classes.descriptionText}>{descriptionText}</p>
          <hr className={classes.horizontalBar} />
        </div>
        <div className={classes.sectionContent}>
          <p>{contentText}</p>
        </div>
        <Button
          smooth
          isAnchor
          variant='primary'
          className={classes.freeQuoteButton}
          onClick={handleModal}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  )
}

export default GrowToday
