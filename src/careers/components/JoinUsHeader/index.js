import classes from './styles.module.scss'

export default function JoinUsHeader () {
  return (
    <section>
      <p className={classes.subheadingText}>Join Us</p>
      <h2 className={classes.titleText}>Job Openings</h2>
      <p className={classes.description}>Didn’t find a job for your profile? Leave your information and join our talent pool.</p>
      <hr className={classes.horizontalBar} />
    </section>
  )
}
