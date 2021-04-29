import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function WhyWeDevelop () {
  return (
    <section className={classes.whyWeDevelopSection}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>Why WeDevelop</p>
        <h2 className={classes.titleText}>You are in <span>the right place if you</span></h2>
      </div>
      <div className={classes.sectionContent}>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <SVGIcon name='staff_augmentation/rocket_icon' />
            <p>Want to <span className={classes.highlightedText}>grow your company’s IT Staff quickly.</span></p>
          </li>
          <li className={classes.listItem}>
            <SVGIcon name='staff_augmentation/tie_icon' />
            <p>Are looking for <span className={classes.highlightedText}>Web Developers, Web Designers.</span></p>
          </li>
          <li className={classes.listItem}>
            <SVGIcon name='staff_augmentation/target_icon' />
            <p>Are tired of <span className={classes.highlightedText}>Spending too much time on interviews.</span></p>
          </li>
        </ul>
        <SVGIcon name='staff_augmentation/insert_idea' className={classes.insertIdea} />
      </div>
    </section>
  )
}

export default WhyWeDevelop
