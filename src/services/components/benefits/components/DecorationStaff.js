import circleLine from 'assets/services/benefits-circle-line.svg'
import circleLeft from 'assets/services/benefits-circle-left.svg'
import circleRight from 'assets/services/benefits-circle-right.svg'
import blurSmallDot from 'assets/services/blur-small.svg'
import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import classes from './decoration.module.scss'

function DecorationStaff() {
  return (
    <>
      <img className={classes.staffCircleLine} src={circleLine} alt="" />
      <img className={classes.staffCircleLeft} src={circleLeft} alt="" />
      <img className={classes.staffCircleRight} src={circleRight} alt="" />
      <img className={classes.staffBlurSmallDot} src={blurSmallDot} alt="" />
      <img className={classes.staffPatternHorizontal} src={patternHorizontal} alt="" />
    </>
  )
}

export default DecorationStaff
