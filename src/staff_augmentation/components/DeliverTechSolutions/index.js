import classnames from 'classnames'

import MaleInVideocall from 'assets/staff_augmentation/male_videocall.png'
import MaleUsingComputer from 'assets/staff_augmentation/male_computer.png'
import MaleSalesSolutions from 'assets/staff_augmentation/male_sales_solutions.png'

import classes from './styles.module.scss'

function DeliverTechSolutions () {
  return (
    <section className={classes.techSolutionsSection}>
      <div className={classes.subSection}>
        <h2 className={classes.title}>
          Meet your next <br />
          <span className={classes.gradientText}>Web Developer today</span>
        </h2>
        <div className={classes.leftImageContainer}>
          <img src={MaleInVideocall} alt='' role='presentation' />
        </div>
        <div className={classnames(classes.textContainer, classes.firstTextContainer)}>
          <h2 className={classes.title}>
            Meet your next{' '}
            <span className={classes.gradientText}>Web Developer today</span>
          </h2>
          <p>
            We send you a list of candidates today along
            with their rates and easy-to-read resumes.
            <br />
            <b>
              Your time is too precious to be dealing with
              Recruiting, Screening, Selection,
              Interviewing, Hiring, and more.
            </b>
          </p>
          <p>
            Let us alleviate that burden. Save time.
            Grow Efficiently.
          </p>
        </div>
      </div>
      <div className={classes.subSection}>
        <h2 className={classes.title}>Hire Top Web Developers, <br /><span className={classes.gradientText}>Without Hassle</span></h2>
        <div className={classes.rightImageContainer}>
          <img src={MaleUsingComputer} alt='' role='presentation' />
        </div>
        <div className={classes.textContainer}>
          <div className={classnames(classes.textContainer, classes.firstTextContainer)}>
            <h2 className={classes.title}>Hire Top Web Developers, <br /><span className={classes.gradientText}>Without Hassle</span></h2>
            <p>
              Hiring the right developer is hard. Especially
              if you're looking for someone with specific
              skills and experience in a particular
              language or technology.
            </p>
            <p>
              At, WeDevelop, we match developers to
              clients based on skill sets, interests, and
              location & provide several options that meet
              your requirements.
              Hire top talent from around In Latin America
              without having to go through the hassle of
              interviewing them yourself.
            </p>
            <p>
              Focus on other important
              things such as growing
              your business and meeting deadlines.
            </p>
          </div>
        </div>
      </div>
      <div className={classnames(classes.subSection, classes.hiddenTextContainer)}>
        <h2 className={classes.title}>Save time, <span className={classes.gradientText}>grow faster</span></h2>
        <div className={classes.leftImageContainer}>
          <img src={MaleSalesSolutions} alt='' role='presentation' />
        </div>
        <div className={classes.textContainer}>
          <div className={classnames(classes.textContainer, classes.firstTextContainer)}>
            <h2 className={classes.title}>Save time, <span className={classes.gradientText}>grow faster</span></h2>
            <p>
              Hiring the wrong developers can cost
              thousands of dollars and hours of
              wasted time.
            </p>
            <p>
              At WeDevelop, we've already put
              in the groundwork.
            </p>
            <p>
              We have access to the best developers for
              your company’s needs, allowing you to focus
              on growing your business instead of trying
              to find new staff members.
            </p>
            <p>
              Stop spending time and resources on
              Interviews. If you want to grow your
              company’s IT Staff quickly
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliverTechSolutions
