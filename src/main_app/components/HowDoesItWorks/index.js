import { useRef } from 'react'
import classNames from 'classnames'
import { Slide } from 'react-slideshow-image'

import { useStep } from './components/hooks/useStep'

import Step from './components/Step'
import WrappedImage from '../WrappedImage'

import DotsPattern from 'assets/how_does_it_works/dots_pattern.svg'
import useMediaQuery from 'utils/use_media_query'
import { forTabletUp } from 'styles/media_queries'

import classes from './styles.module.scss'

function HowDoesItWorks ({
  handleContactCTAClick,
  handleScheduleMeetingCTAClick,
  className
}) {
  const slideRef = useRef()
  const steps = useStep({
    handleContactCTAClick,
    handleScheduleMeetingCTAClick
  })
  const isTabletUp = useMediaQuery(forTabletUp)

  return (
    <section className={classNames(classes.container, className)}>
      <WrappedImage src={DotsPattern} alt='' className={classes.topRightDotsPattern} />
      <div className={classes.sectionHeader}>
        <p className={classes.subheading}>Our Process</p>
        <h2 className={classes.title}>How It Works</h2>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.stepsContainer}>
        <div className={classes.row}>
          <Slide
            ref={slideRef}
            className={classes.slide}
            transitionDuration={500}
            slidesToShow={isTabletUp ? 3 : 1}
            canSwipe={!isTabletUp}
            autoplay={false}
            infinite={false}
            arrows={false}
          >
            {steps?.map(({ id, icon, title, description }) => (
              <Step
                key={id}
                slideRef={slideRef}
                position={id}
                icon={icon}
                title={title}
                description={description}
                className={classes.step}
              />
            ))}
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default HowDoesItWorks
