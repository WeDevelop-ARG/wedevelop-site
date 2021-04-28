import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function HowItWorks () {
  return (
    <section className={classes.howItWorksSection}>
        <div className={classes.sectionHeader}>
          <p className={classes.subheadingText}>How it works</p>
          <h2 className={classes.titleText}>We make it <span>simple</span> for you</h2>
        </div>
        <ol className={classes.sectionContent}>
          <li className={classes.transparentArrow}>
            <SVGIcon name='staff_augmentation/transparent_arrow' />
          </li>
          <li className={classes.contentColumn}>
            <div className={classes.arrowContainer}>
              <div className={classes.arrowTip}></div>
              <div className={classes.numericBadge}>
                <p>1</p>
              </div>
            </div>
            <div className={classes.columnText}>
              <p className={classes.highlightedText}>Team Brief.</p>
              <p>Let us know what exactly do you need.</p>
            </div>
          </li>
          <li className={classes.solidArrow}>
            <SVGIcon name='staff_augmentation/solid_arrow' />
          </li>
          <li className={classes.contentColumn}>
            <div className={classes.arrowContainer}>
              <div className={classes.arrowTip}></div>
              <div className={classes.numericBadge}>
                <p>2</p>
              </div>
            </div>
            <div className={classes.columnText}>
              <p className={classes.highlightedText}>Evaluate Options.</p>
              <p>We’ll present you candidates at no time. You’ll see.</p>
            </div>
          </li>
          <li className={classes.solidArrow}>
            <SVGIcon name='staff_augmentation/solid_arrow' />
          </li>
          <li className={classes.contentColumn}>
            <div className={classes.arrowContainer}>
              <div className={classes.arrowTip}></div>
              <div className={classes.numericBadge}>
                <p>3</p>
              </div>
              <div className={classes.arrowTip}></div>
            </div>
            <div className={classes.columnText}>
              <p className={classes.highlightedText}>Hire and Grow.</p>
              <p>Choose the one you like best and grow your team.</p>
            </div>
          </li>
          <li className={classes.transparentArrow}>
            <SVGIcon name='staff_augmentation/transparent_arrow' />
          </li>
        </ol>
    </section>
  )
}

export default HowItWorks
