import classes from './styles.module.scss'

function JoinUs () {
  return (
    <section className={classes.joinUs}>
      <h2 className={classes.subTitle}>Want to join us?</h2>
      <p className={classes.description}>
        We love to meet new people and have their ideas come alive in the projects we work.<br />If you share our
        <b>{' '}passion of working creatively and professionally</b>
        , please email us your resume or LinkedIn profile to
      </p>
      <a href='mailto:jobs@wedevelop.me'>
        <span className={classes.email}>jobs@wedevelop.me</span>
      </a>
    </section>
  )
}

export default JoinUs
