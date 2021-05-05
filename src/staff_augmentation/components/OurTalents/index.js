import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function OurTalents () {
  return (
    <section className={classes.ourTalentsSection}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>Our talents</p>
        <h2>Expertly Matched Talent</h2>
        <p>We’ll present you candidates in no time. You’ll see.</p>
      </div>
      <div className={classes.sectionContent}>
        <div className={classes.cards}>
          <SVGIcon name="staff_augmentation/developers_icon" className={classes.cardsIcon} />
          <p className={classes.cardsTitle}>Developers</p>
          <p className={classes.cardsText}>
            Deliver high quality engineering solutions: <span className={classes.highlightedText}>engineers, 
            programmers, coders, architects, and more.</span>
          </p>
        </div>
        <div className={classes.cards}>
          <SVGIcon name="staff_augmentation/designers_icon" className={classes.cardsIcon} />
          <p className={classes.cardsTitle}>Designers</p>
          <p className={classes.cardsText}>
            Curate an seamless end-to-end design experience 
            for your audience with our <span className={classes.highlightedText}>UI, UX, Visual, and 
            Interaction design experts.</span>
          </p>
        </div>
        <div className={classes.cards}>
          <SVGIcon name="staff_augmentation/leaders_icon" className={classes.cardsIcon} />
          <p className={classes.cardsTitle}>Team Leaders</p>
          <p className={classes.cardsText}>
            Execute critical projects with experienced <span className={classes.highlightedText}>team 
            leaders and  lead your way to success.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurTalents
