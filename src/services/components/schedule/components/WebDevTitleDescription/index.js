import classes from './styles.module.scss'

function WebDevTitleDescription () {
  return (
    <>
      <h2 className={classes.title}>Estimate your project now!</h2>
      <p className={classes.description}>
        We'll estimate your project in a few meetings,
        using our iterated Agile estimation technique.
      </p>
    </>
  )
}

export default WebDevTitleDescription
