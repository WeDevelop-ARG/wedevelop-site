import { useStaffDetails } from '../hooks/useStaffDetails'
import Pattern from 'assets/services/dots-pattern.svg'
import Circle from 'assets/services/details-deco-circle.svg'
import FilledCircle from 'assets/services/circle.svg'
import EmptyCircle from 'assets/services/empty-circle-left.svg'
import CircleLine from 'assets/services/circle-line.svg'
import classes from './staffDetails.module.scss'
import BlurDot from 'assets/services/blur-dot.svg'
import Image from 'main_app/components/Image'

function StaffDetails() {
  const servicesList = useStaffDetails()
  return (
    <>
    <div className={classes.row}>
      {servicesList && servicesList.map(service => (
        <div key={service.title} className={classes.column}>
          <h3 className={classes.serviceTitle}>{service.title}</h3>
          <p className={classes.serviceDescription}>{service.description}</p>
        </div>
      ))}
    </div>
      <Image className={classes.decoPattern} src={Pattern} alt='' />
      <Image className={classes.decoCircle} src={Circle} alt='' />
      <Image className={classes.decoEmptyCircle} src={EmptyCircle} alt='' />
      <Image className={classes.decoFilledCircle} src={FilledCircle} alt='' />
      <Image className={classes.decoCircleLine} src={CircleLine} alt='' />
      <Image className={classes.decoBlur} src={BlurDot} alt='' />
    </>
  )
}

export default StaffDetails
