import { HashLink } from 'react-router-hash-link'
import Button from 'main_app/components/Button'
import classes from './heroStyles.module.scss'

//Pattern
import webDevPattern from 'assets/services/web-pattern.png'
import staffPattern from 'assets/services/staff-pattern.svg'
//Circle and dot
import webDevCircleDot from 'assets/services/web-circle-dot.svg'
import staffCircleDot from 'assets/services/staff-circle-dot.svg'

//Empty Circle
import webDevEmptyCircle from 'assets/services/web-empty-circle.svg'
import staffEmptyCircle from 'assets/services/staff-empty-circle.svg'

// Circle

import webDevCircle from 'assets/services/web-circle.svg'
import staffCircle from 'assets/services/staff-circle.svg'

function Hero({ icon, photo, background, title, description }) {
  const decoCircleDotClass = title === 'Web Development' ? 'webDecoCircleDot' : 'staffDecoCircleDot'
  const decoCircleDot = title === 'Web Development' ? webDevCircleDot : staffCircleDot

  const decoPatternClass = title === 'Web Development' ? 'webDevDecoPattern' : 'staffDecoPattern'
  const decoPattern = title === 'Web Development' ? webDevPattern : staffPattern

  const decoEmptyCircleClass = title === 'Web Development' ? 'webDevDecoEmptyCircle' : 'stafffDecoEmptyCircle'
  const decoEmptyCircle = title === 'Web Development' ? webDevEmptyCircle : staffEmptyCircle

  const decoBlurClass = title === 'Web Development' ? 'webDevDecoCircle' : 'staffDecoCircle'
  const decoCircle = title === 'Web Development' ? webDevCircle : staffCircle

  return (
    <div className={classes.heroContainer}>
      <div className={classes.flex}>
        <div className={classes.cols}>
          <img className={classes.icon} src={icon} alt='' />
          <h3 className={classes.titleText}>{title}</h3>
          <p className={classes.descriptionText}>
            {description}
          </p>
          <hr className={classes.horizontalBar} />
          <Button
            as={HashLink}
            to='/contact'
            smooth
            isAnchor
            variant='primary'
          >
            Get in Touch
          </Button>
        </div>
        <div className={classes.cols}>
          <img className={classes.photo} src={photo} alt='' />
        </div>
      </div>
      <img className={classes[decoCircleDotClass]} src={decoCircleDot} alt='' />
      <img className={classes[decoPatternClass]} src={decoPattern} alt='' />
      <img className={classes[decoBlurClass]} src={decoCircle} alt='' />
      <img className={classes[decoEmptyCircleClass]} src={decoEmptyCircle} alt='' />
      <img className={classes.heroBackground} src={background} alt='' />
    </div>
  )
}

export default Hero
