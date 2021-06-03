import classes from './styles.module.scss'

function Service ({ id, name, description, photo }) {
  return (
    <li className={classes.service}>
      <img src={photo} alt='serviceName' />
      <h3 className={classes.nameService}>{name}</h3>
      <p className={classes.description}>{description}</p>
    </li>
  )
}

export default Service
