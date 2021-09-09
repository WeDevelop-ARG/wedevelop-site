import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function HireTopTalent ({
  subheadingText,
  titleText,
  descriptionText,
  contentText,
  buttonText,
  handleModal
}) {
  return (
    <section id='hire-top-talent' className={classes.hireTopTalent}>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>{subheadingText}</p>
          <h2 className={classes.titleText}>{titleText}</h2>
          <p className={classes.descriptionText}>{descriptionText}</p>
          <hr className={classes.horizontalBar} />
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
        <div className={classes.sectionContent}>
          {contentText}
        </div>
      </div>
    </section>
  )
}

export default HireTopTalent
