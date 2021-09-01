import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function GrowFaster ({
  subheadingText,
  titleText,
  descriptionText,
  contentText,
  buttonText,
  buttonLink
}) {
  return (
    <section id='grow-today' className={classes.growToday}>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>{subheadingText}</p>
          <h2 className={classes.titleText}>{titleText}</h2>
          <p className={classes.descriptionText}>{descriptionText}</p>
          <hr className={classes.horizontalBar} />
          <div className={classes.sectionContent}>
            <p>{contentText}</p>
          </div>
          <Button
            as={HashLink}
            to={buttonLink}
            smooth
            isAnchor
            variant='primary'
            className={classes.freeQuoteButton}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default GrowFaster
