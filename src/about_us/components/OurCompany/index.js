import PeopleWorking from 'assets/about_us/our_company/people_working.png'
import DotsPattern from 'assets/about_us/dots_pattern.svg'

import WrappedImage from 'main_app/components/WrappedImage'

import classes from './styles.module.scss'

function OurCompany () {
  return (
    <>
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
        <div className={classes.firstTextBlock}>
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
        <div className={classes.filledCircle} aria-hidden='true' />
        <div className={classes.emptyCircle} aria-hidden='true' />
        <div className={classes.smallBlurCircle} aria-hidden='true' />
        <div className={classes.emptySemiCircle} aria-hidden='true' />
        <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.topRightDotsPattern} aria-hidden='true' />
      </section>
      <WrappedImage src={DotsPattern} alt='' layout='responsive' className={classes.topLeftDotsPattern} aria-hidden='true' />
      <WrappedImage src={PeopleWorking} alt='' layout='responsive' className={classes.backgroundImg} />
      <section className={classes.ourCompanyBottom}>
        <div className={classes.lastTextBlock}>
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
        <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.bottomRightDotsPattern} aria-hidden='true' />
        <WrappedImage src={DotsPattern} alt='' layout='intrinsic' className={classes.bottomLeftDotsPattern} aria-hidden='true' />
      </section>
    </>
  )
}

export default OurCompany
