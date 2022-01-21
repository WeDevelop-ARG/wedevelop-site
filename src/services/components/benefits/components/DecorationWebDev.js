import patternVertical from 'assets/services/dots-pattern.svg'
import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import circles from 'assets/services/benefits-deco-circles.svg'
import leftSemicircleMobile from 'assets/services/benefits/left_semicircle_mobile.svg'
import rightSemicircleMobile from 'assets/services/benefits/right_semicircle_mobile.svg'
import classes from './decoration.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

function DecorationWebDev () {
  return (
    <>
      <WrappedImage className={classes.webDevPatternVertical} src={patternVertical} alt='' />
      <WrappedImage className={classes.webDevPatternHorizontal} src={patternHorizontal} alt='' />
      <WrappedImage className={classes.webDevCircles} src={circles} alt='' />
      <WrappedImage className={classes.webDevLeftSemicircleMobile} src={leftSemicircleMobile} alt='' />
      <WrappedImage className={classes.webDevRightSemicircleMobile} src={rightSemicircleMobile} alt='' />
    </>

  )
}

export default DecorationWebDev
