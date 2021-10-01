import circleLine from 'assets/services/benefits-circle-line.svg'
import circleLeft from 'assets/services/benefits-circle-left.svg'
import circleRight from 'assets/services/benefits-circle-right.svg'
import blurSmallDot from 'assets/services/blur-small.svg'
import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import classes from './decoration.module.scss'
import Image from 'main_app/components/Image'

function DecorationStaff() {
  return (
    <>
      <Image className={classes.staffCircleLine} src={circleLine} alt="" />
      <Image className={classes.staffCircleLeft} src={circleLeft} alt="" />
      <Image className={classes.staffCircleRight} src={circleRight} alt="" />
      <Image className={classes.staffBlurSmallDot} src={blurSmallDot} alt="" />
      <Image className={classes.staffPatternHorizontal} src={patternHorizontal} alt="" />
    </>
  )
}

export default DecorationStaff
