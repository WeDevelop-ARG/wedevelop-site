import CircleLine from 'assets/services/benefits-circle-line.svg'
import CircleLeft from 'assets/services/benefits-circle-left.svg'
import CircleRight from 'assets/services/benefits-circle-right.svg'
import BlurSmallDot from 'assets/services/blur-small.svg'
import PatternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import RightSemicircleMobile from 'assets/services/benefits/right_semicircle_mobile.svg'
import classes from './decoration.module.scss'

function DecorationStaff () {
  return (
    <>
      <img className={classes.staffCircleLine} src={CircleLine} alt='' aria-hidden />
      <img className={classes.staffCircleLeft} src={CircleLeft} alt='' aria-hidden />
      <img className={classes.staffCircleRight} src={CircleRight} alt='' aria-hidden />
      <img className={classes.staffBlurSmallDot} src={BlurSmallDot} alt='' aria-hidden />
      <img className={classes.staffPatternHorizontal} src={PatternHorizontal} alt='' aria-hidden />
      <img className={classes.staffPatternVertical} src={PatternHorizontal} alt='' aria-hidden />
      <img className={classes.webDevRightSemicircleMobile} src={RightSemicircleMobile} alt='' aria-hidden />
    </>
  )
}

export default DecorationStaff
