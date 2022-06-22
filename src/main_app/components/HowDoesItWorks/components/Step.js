import React from 'react'
import classNames from 'classnames'

import WrappedImage from 'main_app/components/WrappedImage'
import useMediaQuery from 'utils/use_media_query'
import { forDesktopUp } from 'styles/media_queries'

import stepOneMobile from 'assets/how_does_it_works/indicators/one-indicator.svg'
import stepTwoMobile from 'assets/how_does_it_works/indicators/two-indicator.svg'
import stepThreeMobile from 'assets/how_does_it_works/indicators/three-indicator.svg'
import mobileArrow from 'assets/how_does_it_works/arrows/right_arrow_mobile.svg'
import classes from './styles.module.scss'

function Step ({ className, icon, title, description, position, slideRef }) {
  const isDesktopUp = useMediaQuery(forDesktopUp)
  const normalIconsStep = [
    { id: 1, img: stepOneMobile },
    { id: 2, img: stepTwoMobile },
    { id: 3, img: stepThreeMobile }
  ]

  const handleGoTo = (index) => slideRef.current?.goTo(index)

  return (
    <div className={classNames(classes.column, className)}>
      {!isDesktopUp &&
        <div className={classes.stepIndicator}>
          {normalIconsStep.map(({ id, img }, index) => (
            <React.Fragment key={id}>
              {position === id
                ? icon
                : <WrappedImage
                    src={img} alt=''
                    className={classes.unSelectedStep}
                    onClick={() => handleGoTo(index)}
                  />}
              {(normalIconsStep.length - 1) === index || <WrappedImage src={mobileArrow} alt='' />}
            </React.Fragment>
          ))}
        </div>}
      {isDesktopUp && icon}
      <div className={classes.textContainer}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  )
}

export default Step
