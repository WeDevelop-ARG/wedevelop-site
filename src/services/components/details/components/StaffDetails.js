import { useStaffDetails } from '../hooks/useStaffDetails'

import Pattern from 'assets/services/staff_aug_details/dots_pattern.svg'
import Circle from 'assets/services/details-deco-circle.svg'
import FilledCircle from 'assets/services/circle.svg'
import EmptyCircle from 'assets/services/empty-circle-left.svg'
import CircleLine from 'assets/services/circle-line.svg'
import BlurDot from 'assets/services/blur-dot.svg'
import LeftSemicirclesMobile from 'assets/services/staff_aug_details/left_semicircles_mobile.svg'
import RightSemicirclesMobile from 'assets/services/staff_aug_details/right_semicircles_mobile.svg'

import classes from './staffDetails.module.scss'

function StaffDetails () {
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
      <img className={classes.decoPattern} src={Pattern} alt='' aria-hidden />
      <img className={classes.decoCircle} src={Circle} alt='' aria-hidden />
      <img className={classes.decoEmptyCircle} src={EmptyCircle} alt='' aria-hidden />
      <img className={classes.decoFilledCircle} src={FilledCircle} alt='' aria-hidden />
      <img className={classes.decoCircleLine} src={CircleLine} alt='' aria-hidden />
      <img className={classes.decoBlur} src={BlurDot} alt='' aria-hidden />
      <img className={classes.leftSemicirclesMobile} src={LeftSemicirclesMobile} alt='' aria-hidden />
      <img className={classes.rightSemicirclesMobile} src={RightSemicirclesMobile} alt='' aria-hidden />
    </>
  )
}

export default StaffDetails
