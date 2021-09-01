import patternVertical from 'assets/services/dots-pattern.svg'
import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import circles from 'assets/services/benefits-deco-circles.svg'
import classes from './decoration.module.scss'

function DecorationWebDev() {
  return (
    <>
      <img className={classes.webDevPatternVertical} src={patternVertical} alt="" />
      <img className={classes.webDevPatternHorizontal} src={patternHorizontal} alt="" />
      <img className={classes.webDevCircles} src={circles} alt="" />
    </>

  )
}

export default DecorationWebDev
