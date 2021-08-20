import { useStaffDetails } from '../hooks/useStaffDetails'
import classes from './staffDetails.module.scss'

function StaffDetails() {
  const servicesList = useStaffDetails()
  return (
    <div className={classes.row}>
      {servicesList && servicesList.map(service => (
        <div key={service.title} className={classes.column}>
          <h4 className={classes.serviceTitle}>{service.title}</h4>
          <p className={classes.serviceDescription}>{service.description}</p>
        </div>
      ))}
    </div>
  )
}

export default StaffDetails
