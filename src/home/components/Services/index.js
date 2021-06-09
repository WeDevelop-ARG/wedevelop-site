import Service from '../Service'
import useService from '../../hooks/useService'
import classes from './styles.module.scss'

function Services () {
  const services = useService()

  return (
    <section className={classes.services}>
      <h2 className={classes.subHeading}>What we do</h2>
      <ul className={classes.serviceList}>
        {services.map(({
          id,
          name,
          description,
          photo
        }) => (
          <li className={classes.service} key={id}>
            <Service
              name={name}
              description={description}
              photo={photo}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
