import { HashLink } from 'react-router-hash-link'
import { useHeroDecoration } from './hooks/useHeroDecoration'
import Button from 'main_app/components/Button'
import classes from './heroStyles.module.scss'

function Hero ({
  service,
  icon,
  photo,
  background,
  title,
  description,
  contactPagePath,
  className
}) {
  const {
    Pattern,
    CircleDot,
    EmptyCircle,
    Circle,
    decoClasses
  } = useHeroDecoration(service)

  return (
    <>
      <section className={className}>
        <div className={classes.container}>
          <div className={classes.contentContainer}>
            <img className={classes.icon} src={icon} alt='' />
            <h2 className={classes.titleText}>{title}</h2>
            <p className={classes.descriptionText}>
              {description}
            </p>
            <hr className={classes.horizontalBar} />
            <Button
              as={HashLink}
              to={contactPagePath}
              smooth
              isAnchor
              variant='primary'
            >
              Get in Touch
            </Button>
          </div>
          <img className={classes.photo} src={photo} alt='' />
        </div>
        <img className={classes[decoClasses.circleDot]} src={CircleDot} alt='' />
        <img className={classes[decoClasses.pattern]} src={Pattern} alt='' />
        <img className={classes[decoClasses.circle]} src={Circle} alt='' />
        <img className={classes[decoClasses.emptyCircle]} src={EmptyCircle} alt='' />
      </section>
      <img className={classes.heroBackground} src={background} alt='' />
    </>
  )
}

export default Hero
