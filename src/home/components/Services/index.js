import Service from '../Service'
import useService from '../../hooks/useService'
import classes from './styles.module.scss'

function Services () {
  const services = useService()

  return (
    <div className={classes.services}>
      <h2 className={classes.subHeading}>What we do</h2>
      <ul className={classes.serviceList}>
        {services.map(({
          id,
          name,
          description,
          photo
        }, index) => (
          <Service
            key={id}
            name={name}
            description={description}
            photo={photo}
          />
        ))}
      </ul>
    </div>
  )
}

export default Services
