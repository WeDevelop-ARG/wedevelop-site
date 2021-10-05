import patternVertical from 'assets/services/dots-pattern.svg'
import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import circles from 'assets/services/benefits-deco-circles.svg'
import classes from './decoration.module.scss'
import Image from 'main_app/components/Image'

function DecorationWebDev() {
  return (
    <>
      <Image className={classes.webDevPatternVertical} src={patternVertical} alt="" />
      <Image className={classes.webDevPatternHorizontal} src={patternHorizontal} alt="" />
      <Image className={classes.webDevCircles} src={circles} alt="" />
    </>

  )
}

export default DecorationWebDev
