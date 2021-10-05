import PeopleWorking from 'assets/about_us/our_company/people_working.png'
import DotsPattern from 'assets/about_us/dots_pattern.svg'
import Image from 'main_app/components/Image'

import classes from './styles.module.scss'

function OurCompany () {
  return (
    <section id='our-company' className={classes.ourCompany}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>About Us</p>
        <h2 className={classes.titleText}>Our Company</h2>
        <p className={classes.descriptionText}>
          Providing a more enjoyable life for people and
          being the company everyone wants to work with.
        </p>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.sectionContent}>
        <div className={classes.textBlock}>
          <p>
            Since 2019, this US-based company has been delivering
            exceptional Software Development Services. Our team is
            a diverse group of people from all around the globe,
            with the majority of the Engineers and Designers from
            Argentina, Uruguay, Peru, Colombia, and other central
            and south american countries.
          </p>
          <p>
            At WeDevelop, we love what we do, and that gets reflected
            in our results as we work day by day to transform and
            innovate as we want to build a better tomorrow for the
            world we live in and love.
          </p>
        </div>
        <div className={classes.backgroundImgContainer}>
          <Image src={PeopleWorking} alt='' className={classes.backgroundImg} />
        </div>
        <div className={classes.textBlock}>
          <p>
            We're not just another software company,
            <b>
              {' '}we're working together as a dream
              team, and believe in partnership rather
              than competition.{' '}
            </b>
            When we set our minds to a goal, there's
            nothing that can stop us from achieving it.
          </p>
          <p>
            We respect each other and encourage an environment filled
            with equality, where collaborators feel appreciated and
            know they're valued for their abilities beyond anything else.
          </p>
        </div>
      </div>
      <div className={classes.filledCircle} aria-hidden='true' />
      <div className={classes.emptyCircle} aria-hidden='true' />
      <div className={classes.smallBlurCircle} aria-hidden='true' />
      <div className={classes.emptySemiCircle} aria-hidden='true' />
      <Image src={DotsPattern} alt='' className={classes.topRightDotsPattern} aria-hidden='true' />
      <Image src={DotsPattern} alt='' className={classes.topLeftDotsPattern} aria-hidden='true' />
      <Image src={DotsPattern} alt='' className={classes.bottomRightDotsPattern} aria-hidden='true' />
      <Image src={DotsPattern} alt='' className={classes.bottomLeftDotsPattern} aria-hidden='true' />
    </section>
  )
}

export default OurCompany
