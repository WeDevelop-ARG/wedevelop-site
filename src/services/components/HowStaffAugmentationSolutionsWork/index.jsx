import DotsPattern from 'assets/services/dots-pattern.component.svg'

import classes from './styles.module.scss'

function HowStaffAugmentationSolutionsWork () {
  return (
    <section className={classes.howStaffAugmentationSolutionsWork}>
      <DotsPattern className={classes.topRightPattern} viewBox='0 0 166 327' preserveAspectRatio='xMidYMid meet' />
      <div className={classes.sectionContent}>
        <h2 className={classes.titleContainer}>
          <p className={classes.titleText}>How Our IT Talent Solutions<b className={classes.colouredTitleText}> Work</b></p>
        </h2>
        <hr className={classes.horizontalBar} />
        <p className={classes.descriptionText}>
          Keep your business agile when developing your next project with our dependable IT staffing solutions. At WeDevelop,
          we help your business deliver value with a <b>team aligned with your brand's goals and company culture.</b>
          <br />
          <br />
          We understand the challenges of getting suitable hires on board, and that's why <b>we streamline the hiring process</b>,
          helping you save time and money. Our exclusive methodology focuses on tailoring our solutions and creating
          long-lasting relationships with every client.
        </p>
      </div>
      <DotsPattern className={classes.leftPattern} viewBox='0 0 166 327' preserveAspectRatio='xMidYMid meet' />
    </section>
  )
}

export default HowStaffAugmentationSolutionsWork
