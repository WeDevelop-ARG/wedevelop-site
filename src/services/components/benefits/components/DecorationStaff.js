import CircleLine from 'assets/services/benefits-circle-line.svg'
import CircleLeft from 'assets/services/benefits-circle-left.svg'
import CircleRight from 'assets/services/benefits-circle-right.svg'
import BlurSmallDot from 'assets/services/blur-small.svg'
import PatternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import RightSemicircleMobile from 'assets/services/benefits/right_semicircle_mobile.svg'
import classes from './decoration.module.scss'
import Image from 'next/image'

function DecorationStaff () {
  return (
    <>
      <Image className={classes.staffCircleLine} src={CircleLine} alt='' />
      <Image className={classes.staffCircleLeft} src={CircleLeft} alt='' />
      <Image className={classes.staffCircleRight} src={CircleRight} alt='' />
      <Image className={classes.staffBlurSmallDot} src={BlurSmallDot} alt='' />
      <Image className={classes.staffPatternHorizontal} src={PatternHorizontal} alt='' />
      <Image className={classes.staffPatternVertical} src={PatternHorizontal} alt='' />
      <Image className={classes.webDevRightSemicircleMobile} src={RightSemicircleMobile} alt='' />
    </>
  )
}

export default DecorationStaff
