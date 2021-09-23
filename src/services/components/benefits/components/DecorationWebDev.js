import PatternVertical from 'assets/services/dots-pattern.svg'
import PatternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import Circles from 'assets/services/benefits-deco-circles.svg'
import LeftSemicircleMobile from 'assets/services/benefits/left_semicircle_mobile.svg'
import RightSemicircleMobile from 'assets/services/benefits/right_semicircle_mobile.svg'
import classes from './decoration.module.scss'

function DecorationWebDev () {
  return (
    <>
      <img className={classes.webDevPatternVertical} src={PatternVertical} alt='' aria-hidden />
      <img className={classes.webDevPatternHorizontal} src={PatternHorizontal} alt='' aria-hidden />
      <img className={classes.webDevCircles} src={Circles} alt='' aria-hidden />
      <img className={classes.webDevLeftSemicircleMobile} src={LeftSemicircleMobile} alt='' aria-hidden />
      <img className={classes.webDevRightSemicircleMobile} src={RightSemicircleMobile} alt='' aria-hidden />
    </>

  )
}

export default DecorationWebDev
