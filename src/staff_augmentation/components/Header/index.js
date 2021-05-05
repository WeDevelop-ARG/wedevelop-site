import GetFreeQuote from '../GetFreeQuote'

import classes from './styles.module.scss'

function Header () {
  return (
    <section id='headerSection' className={classes.headerContainer}>
      <div className={classes.wrapper}>
        <div className={classes.textContainer}>
          <p className={classes.subheadingText}>
            IT Staff Augmentation
          </p>
          <h1 className={classes.titleText}>
            Grow your staff <span className={classes.gradientText}>in a week</span>
          </h1>
          <p className={classes.descriptionText}>
            Our experienced engineering teams deliver dream-team 
            outcomes, <span className={classes.highlightedText}>without the hassles of hiring.</span>
          </p>
        </div>
        <GetFreeQuote />
      </div>
    </section>
  )
}

export default Header
