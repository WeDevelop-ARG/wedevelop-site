import InternalLink from 'main_app/components/InternalLink'
import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import WrappedImage from 'main_app/components/WrappedImage'

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
          <WrappedImage layout='responsive' className={classes.photo} src={photo} alt='' loading='eager' />
        </div>
        <WrappedImage className={classes[decoClasses.circleDot]} src={CircleDot} alt='' />
        <WrappedImage className={classes[decoClasses.pattern]} src={Pattern} alt='' />
        <WrappedImage className={classes[decoClasses.circle]} src={Circle} alt='' />
        <WrappedImage className={classes[decoClasses.emptyCircle]} src={EmptyCircle} alt='' />
        <WrappedImage className={classes[decoClasses.patternMobile]} src={PatternMobile} alt='' />
        <WrappedImage className={classes[decoClasses.circleMobile]} src={CircleMobile} alt='' />
      </section>
      <BackgroundContainer className={classes.heroBackground} backgroundURL={background} alt='' loading='eager' />
    </>
  )
}

export default Hero
