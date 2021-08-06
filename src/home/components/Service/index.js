import classes from './styles.module.scss'

function Service ({ title, description, photo, path }) {
  return (
    <div>
      <img className={classes.photo} src={photo} alt='' />
      <h3 className={classes.nameService}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Service
