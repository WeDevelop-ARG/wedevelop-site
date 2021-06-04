import classes from './styles.module.scss'
import SVGIcon from 'main_app/components/SVGIcon'

function Service ({ name, description, photo }) {
  return (
    <div>
      <SVGIcon name={photo} />
      <h3 className={classes.nameService}>{name}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Service
