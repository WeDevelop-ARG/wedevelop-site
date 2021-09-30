import classnames from 'classnames'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import DevCard from './DevCard'

import useMediaQuery from 'utils/use_media_query'
import { forDesktopUp, forBigDesktopUp } from 'styles/media_queries'

import PrevArrow from 'assets/web_developers/available_team/left_arrow.svg'
import NextArrow from 'assets/web_developers/available_team/right_arrow.svg'

import classes from './styles.module.scss'

function AvailableDevsCarousel ({ devs, handleModal }) {
  const prevArrow = <img src={PrevArrow} alt='' className={classnames('default-nav', classes.prevArrow)} />
  const nextArrow = <img src={NextArrow} alt='' className={classnames('default-nav', classes.nextArrow)} />
  const isDesktopUp = useMediaQuery(forDesktopUp)
  const isBigDesktopUp = useMediaQuery(forBigDesktopUp)
  const determineSlidesToShow = () => {
    if (isBigDesktopUp) return 4
    if (window.screen.width >= 1275) return 3
    if (isDesktopUp) return 2
    return 1
  }

  return (
    <div className={classes.devsCarousel}>
      <Slide
        duration={5000}
        transitionDuration={500}
        autoplay
        pauseOnHover
        arrows
        slidesToShow={determineSlidesToShow()}
        prevArrow={prevArrow}
        nextArrow={nextArrow}
      >
        {devs.map(({ id, devImgURL, devName, devRole, devSkills, devExperience, devRate }) => (
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
        ))}
      </Slide>
    </div>
  )
}

export default AvailableDevsCarousel
