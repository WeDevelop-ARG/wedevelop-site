import patternVertical from 'assets/services/dots-pattern.svg'
import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import circles from 'assets/services/benefits-deco-circles.svg'
import leftSemicircleMobile from 'assets/services/benefits/left_semicircle_mobile.svg'
import rightSemicircleMobile from 'assets/services/benefits/right_semicircle_mobile.svg'
import classes from './decoration.module.scss'
import Image from 'next/image'

function DecorationWebDev () {
  return (
    <>
      <Image className={classes.webDevPatternVertical} src={patternVertical} alt='' />
      <Image className={classes.webDevPatternHorizontal} src={patternHorizontal} alt='' />
      <Image className={classes.webDevCircles} src={circles} alt='' />
      <Image className={classes.webDevLeftSemicircleMobile} src={leftSemicircleMobile} alt='' />
      <Image className={classes.webDevRightSemicircleMobile} src={rightSemicircleMobile} alt='' />
    </>

  )
}

export default DecorationWebDev
