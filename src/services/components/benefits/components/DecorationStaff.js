import CircleLine from 'assets/services/benefits-circle-line.svg'
import CircleLeft from 'assets/services/benefits-circle-left.svg'
import CircleRight from 'assets/services/benefits-circle-right.svg'
import BlurSmallDot from 'assets/services/blur-small.svg'
import PatternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import RightSemicircleMobile from 'assets/services/benefits/right_semicircle_mobile.svg'
import classes from './decoration.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

function DecorationStaff () {
  return (
    <>
      <WrappedImage className={classes.staffCircleLine} src={CircleLine} alt='' />
      <WrappedImage className={classes.staffCircleLeft} src={CircleLeft} alt='' />
      <WrappedImage className={classes.staffCircleRight} src={CircleRight} alt='' />
      <WrappedImage className={classes.staffBlurSmallDot} src={BlurSmallDot} alt='' />
      <WrappedImage className={classes.staffPatternHorizontal} src={PatternHorizontal} alt='' />
      <WrappedImage className={classes.staffPatternVertical} src={PatternHorizontal} alt='' />
      <WrappedImage className={classes.webDevRightSemicircleMobile} src={RightSemicircleMobile} alt='' />
    </>
  )
}

export default DecorationStaff
