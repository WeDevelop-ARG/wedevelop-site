import { Fragment } from 'react'
import classnames from 'classnames'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import DevCard from './DevCard'

import PrevArrow from 'assets/web_developers/available_team/left_arrow.svg'
import NextArrow from 'assets/web_developers/available_team/right_arrow.svg'

import classes from './styles.module.scss'

function AvailableDevsCarousel ({ devs, handleModal }) {
  const prevArrow = <img src={PrevArrow} alt='' className={classnames('default-nav', classes.prevArrow)} />
  const nextArrow = <img src={NextArrow} alt='' className={classnames('default-nav', classes.nextArrow)} />

  return (
    <div className={classes.devsCarousel}>
      <Slide
        duration={5000}
        transitionDuration={500}
        autoplay
        pauseOnHover
        arrows
        slidesToShow={4}
        prevArrow={prevArrow}
        nextArrow={nextArrow}
      >
        {devs.map(({ id, devImgURL, devName, devRole, devSkills, devExperience, devRate }) => (
          <Fragment key={id}>
            <DevCard
              key={id}
              devImgURL={devImgURL}
              devName={devName}
              devRole={devRole}
              devSkills={devSkills}
              devExperience={devExperience}
              devRate={devRate}
              handleModal={handleModal}
            />
          </Fragment>
        ))}
      </Slide>
    </div>
  )
}

export default AvailableDevsCarousel
