import classes from './styles.module.scss'

function TechSolutions ({ title, description, imageURL, imageAtRight }) {
  return (
    <div className={classes.subSection}>
      <h2 className={classes.title}>{title}</h2>
      <div className={imageAtRight ? classes.rightImageContainer : classes.leftImageContainer}>
        <img src={imageURL} alt='' role='presentation' />
      </div>
      <div className={classes.description}>
        <h2 className={classes.title}>{title}</h2>
        {description}
      </div>
    </div>
  )
}

export default TechSolutions
