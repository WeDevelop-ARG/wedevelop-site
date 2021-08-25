import { useStaffDetails } from '../hooks/useStaffDetails'
import Pattern from 'assets/services/dots-pattern.svg'
import Circle from 'assets/services/details-deco-circle.svg'
import FilledCircle from 'assets/services/circle.svg'
import EmptyCircle from 'assets/services/empty-circle-left.svg'
import CircleLine from 'assets/services/circle-line.svg'
import classes from './staffDetails.module.scss'
import BlurDot from 'assets/services/blur-dot.svg'

function StaffDetails() {
  const servicesList = useStaffDetails()
  return (
    <>
    <div className={classes.row}>
      {servicesList && servicesList.map(service => (
        <div key={service.title} className={classes.column}>
          <h4 className={classes.serviceTitle}>{service.title}</h4>
          <p className={classes.serviceDescription}>{service.description}</p>
        </div>
      ))}
    </div>
      <img className={classes.decoPattern} src={Pattern} alt='' />
      <img className={classes.decoCircle} src={Circle} alt='' />
      <img className={classes.decoEmptyCircle} src={EmptyCircle} alt='' />
      <img className={classes.decoFilledCircle} src={FilledCircle} alt='' />
      <img className={classes.decoCircleLine} src={CircleLine} alt='' />
      <img className={classes.decoBlur} src={BlurDot} alt='' />
    </>
  )
}

export default StaffDetails
