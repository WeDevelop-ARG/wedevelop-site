import InternalLink from 'main_app/components/InternalLink'

import { useHeroDecoration } from './hooks/useHeroDecoration'
import Button from 'main_app/components/Button'
import classes from './heroStyles.module.scss'
import Image from 'next/image'

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
    PatternMobile,
    CircleDot,
    EmptyCircle,
    Circle,
    CircleMobile,
    decoClasses
  } = useHeroDecoration(service)

  return (
    <>
      <section className={className}>
        <div className={classes.container}>
          <div className={classes.contentContainer}>
            <Image className={classes.icon} src={icon} alt='' />
            <h2 className={classes.titleText}>{title}</h2>
            <p className={classes.descriptionText}>
              {description}
            </p>
            <hr className={classes.horizontalBar} />
            <Button
              as={InternalLink}
              href={contactPagePath}
              smooth
              isAnchor
              variant='primary'
            >
              Get in Touch
            </Button>
          </div>
          <Image className={classes.photo} src={photo} alt='' loading='eager' />
        </div>
        <Image className={classes[decoClasses.circleDot]} src={CircleDot} alt='' />
        <Image className={classes[decoClasses.pattern]} src={Pattern} alt='' />
        <Image className={classes[decoClasses.circle]} src={Circle} alt='' />
        <Image className={classes[decoClasses.emptyCircle]} src={EmptyCircle} alt='' />
        <Image className={classes[decoClasses.patternMobile]} src={PatternMobile} alt='' />
        <Image className={classes[decoClasses.circleMobile]} src={CircleMobile} alt='' />
      </section>
      <Image className={classes.heroBackground} src={background} alt='' loading='eager' />
    </>
  )
}

export default Hero
