import classes from './styles.module.scss'

export default function JoinUsHeader () {
  return (
    <section>
      <p className={classes.subheadingText}>Join Us</p>
      <h2 className={classes.titleText}>Job Openings</h2>
      <p className={classes.description}>
        Unlock global opportunities and take your IT career to the next level by
        joining our remote team today! Collaborate with experts from Latin America
        and work on cutting-edge projects based in the United States
      </p>
      <hr className={classes.horizontalBar} />
    </section>
  )
}
