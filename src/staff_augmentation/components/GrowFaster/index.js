import Button from 'main_app/components/Button'
import pattern from '../../../assets/home/services/pattern.svg'

import classes from './styles.module.scss'

function GrowFaster ({
  subheadingText,
  titleText,
  descriptionText,
  contentText,
  buttonText,
  handleModal
}) {
  return (
    <section id='grow-today' className={classes.growFaster}>
      <div className={classes.growFasterContainer}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>{subheadingText}</p>
          <h2 className={classes.titleText}>{titleText}</h2>
          <p className={classes.descriptionText}>{descriptionText}</p>
          <hr className={classes.horizontalBar} />
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
          <div className={classes.emptyBigCircle} />
          <div className={classes.emptyCircle} />
          <div className={classes.smallBlurRightCircle} />
          <div className={classes.filledBigCircle} />
        </div>
      </div>
      <img src={pattern} alt='' className={classes.patternRight} />
    </section>
  )
}

export default GrowFaster
