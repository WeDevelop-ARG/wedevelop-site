import classes from './styles.module.scss'

function JoinUs () {
  return (
    <div className={classes.joinUs}>
      <h3 className={classes.subTitle}>Want to join us?</h3>
      <p className={classes.description}>
        We love to meet new people and have their ideas come alive in the projects we work.<br />If you share our
        <span>
          <> passion of working creatively and professionally</>
        </span>
        , please email us your resume or LinkedIn profile to
      </p>
      <h4 className={classes.email}>jobs@wedevelop.me</h4>
    </div>
  )
}

export default JoinUs
