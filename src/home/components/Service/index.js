import classes from './styles.module.scss'
import SVGIcon from 'main_app/components/SVGIcon'

function Service ({ title, description, photo, path }) {
  return (
    <div>
      <SVGIcon className={classes.photo} name={photo} />
      <h3 className={classes.nameService}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Service
