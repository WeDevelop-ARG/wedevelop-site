import classes from './styles.module.scss'

function Service ({ title, description }) {
  return (
    <div className={classes.container}>
      <h3 className={classes.nameService}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Service
