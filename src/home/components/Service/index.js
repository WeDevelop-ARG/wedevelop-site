import WrappedImage from 'main_app/components/WrappedImage'
import classes from './styles.module.scss'

function Service ({ title, description, photo, path }) {
  return (
    <div>
      {photo && <WrappedImage className={classes.photo} layout='fixed' src={photo} alt='' />}
      {title && <h3 className={classes.nameService}>{title}</h3>}
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Service
