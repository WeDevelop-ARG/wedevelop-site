import classes from './styles.module.scss'

function WebDevTitleDescription () {
  return (
    <>
      <h2 className={classes.title}>Get an estimate for your project now!</h2>
      <p className={classes.description}>
        We’ll map out your project in just a few
        meetings using our proven Agile estimation technique.
      </p>
    </>
  )
}

export default WebDevTitleDescription
