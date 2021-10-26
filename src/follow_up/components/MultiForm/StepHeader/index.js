import classes from './styles.module.scss'

function StepHeader ({ title, description }) {
  return (
    <div>
      <h2 className={classes.titleText}>{title}</h2>
      <p className={classes.descriptionText}>{description}</p>
      <hr className={classes.horizontalBar} />
    </div>
  )
}

export default StepHeader
