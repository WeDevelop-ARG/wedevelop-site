import Image from 'next/image'
import classes from './styles.module.scss'

function Service ({ title, description, photo, path }) {
  console.log(photo)
  return (
    <div>
      {photo && <Image className={classes.photo} src={photo} alt='' />}
      <h3 className={classes.nameService}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Service
