import DotsPattern from 'assets/home/dots_pattern.svg'
import WrappedImage from '../WrappedImage'

import classes from './styles.module.scss'

function HowStaffAugmentationSolutionsWork () {
  return (
    <>
      <section className={classes.howStaffAugmentationSolutionsWork}>
        <WrappedImage src={DotsPattern} layout='intrinsic' alt='' className={classes.leftPattern} aria-hidden='true' />
        <div className={classes.sectionContent}>
          <h2 className={classes.titleContainer}>
            <p className={classes.titleText}>How Our Staff Augmentation Solutions<b className={classes.colouredTitleText}> Work</b></p>
          </h2>
          <hr className={classes.horizontalBar} />
          <p className={classes.descriptionText}>
            Keep your business agile when developing your next project with our dependable IT staffing solutions. At WeDevelop,
            <b> we help your business deliver value with a team aligned with your brand's goals and company culture.</b>
            <br />
            <br />
            We understand the challenges of getting suitable hires on board, and that's why we streamline the hiring process,
            <b> helping you save time and money</b>
            . Our exclusive methodology focuses on tailoring our solutions and creating long-lasting relationships with every client.
          </p>
        </div>
      </section>
    </>
  )
}

export default HowStaffAugmentationSolutionsWork
