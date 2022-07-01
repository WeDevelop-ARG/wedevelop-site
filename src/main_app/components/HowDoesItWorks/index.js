import { useRef } from 'react'
import classNames from 'classnames'
import { Slide } from 'react-slideshow-image'

import { useStep } from './components/hooks/useStep'
import Step from './components/Step'
import WrappedImage from '../WrappedImage'

import useMediaQuery from 'utils/use_media_query'
import { forDesktopUp } from 'styles/media_queries'

import rightArrow from '../../../assets/how_does_it_works/arrows/right_arrow_mobile.svg'
import classes from './styles.module.scss'
import 'react-slideshow-image/dist/styles.css'

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
  const isTabletUp = useMediaQuery(forDesktopUp)

  return (
    <section className={classNames(classes.container, className)}>
      <div className={classes.sectionHeader}>
        <h2 className={classes.title}>We find you the best developers</h2>
        <hr className={classes.horizontalBar} />
        <p>Connect with expert developers in just 3 easy steps:</p>
      </div>
      <div className={classes.stepsContainer}>
        <div className={classes.row}>
          <Slide
            ref={slideRef}
            className={classes.slide}
            transitionDuration={500}
            slidesToShow={1}
            canSwipe={!isTabletUp}
            autoplay={false}
            infinite={false}
            arrows={false}
            indicators={!isTabletUp ? (index) => {
              return (<div>
                <div className={classNames('stepsIndicator')}></div>
                {index < 2 && <WrappedImage className={classes.arrow} src={rightArrow} />}
              </div>)
            } : undefined}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }
            ]}
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
