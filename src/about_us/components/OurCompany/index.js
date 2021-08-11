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
            Since 2019, WeDevelop has been delivering exceptional
            software development services that help our partners
            make their vision come true with a competitive edge.
          </p>
          <p>
            At WeDevelop, we love what we do, and that gets reflected
            in our results as we work day by day to transform and
            innovate as we want to build a better tomorrow for the
            world we live in and love.
          </p>
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
    </section>
  )
}

export default OurCompany
