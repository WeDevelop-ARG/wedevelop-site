import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import Button from 'main_app/components/Button'
import classes from './heroStyles.module.scss'
import { useHeroDecoration } from './hooks/useHeroDecoration'

function Hero({ service, icon, photo, background, title, description }) {
  const location = useLocation()
  const path = location.pathname
  const {
    Pattern,
    CircleDot,
    EmptyCircle,
    Circle,
    decoClasses
  } = useHeroDecoration(path)

  return (
    <>
      <div className={`${classes.container} ${classes[service]}`}>
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
        <img className={classes.photo} src={photo} alt='' />
      </div>
      <img className={classes[decoClasses.circleDot]} src={CircleDot} alt='' />
        <img className={classes[decoClasses.pattern]} src={Pattern} alt='' />
        <img className={classes[decoClasses.circle]} src={Circle} alt='' />
        <img className={classes[decoClasses.emptyCircle]} src={EmptyCircle} alt='' />
        <img className={classes.heroBackground} src={background} alt='' />


    </>
  )
}

export default Hero
