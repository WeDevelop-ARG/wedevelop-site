import classnames from 'classnames'

import Button from 'main_app/components/Button'
import AvailableDevsList from './AvailableDevsList'
import AvailableDevsCarousel from './AvailableDevsCarousel'

import CarouselBackground from 'assets/web_developers/available_team/background.svg'
import DotsPattern from 'assets/home/dots_pattern.svg'

import classes from './styles.module.scss'

function AvailableDevs ({ subtitle, title, description, format, devs, buttonText, handleModal }) {
  const renderAvailableTeam = (format) => {
    if (format === 'carousel') {
      return (
        <AvailableDevsCarousel devs={devs} handleModal={handleModal} />
      )
    }

    return (
      <AvailableDevsList devs={devs} handleModal={handleModal} />
    )
  }
  const renderDecoration = (format) => {
    if (format === 'carousel') {
      return (
        <img src={CarouselBackground} alt='' className={classes.carouselBackground} />
      )
    }

    return (
      <>
        <div className={classes.filledCircle} aria-hidden='true' />
        <div className={classes.emptySolidCircle} aria-hidden='true' />
        <div className={classes.emptyLightCircle} aria-hidden='true' />
        <div className={classes.smallBlurCircle} aria-hidden='true' />
        <img src={DotsPattern} alt='' className={classes.dotsPattern} />
      </>
    )
  }

  return (
    <section className={classnames(classes.availableDevs, { [classes.backgroundPadding]: format === 'carousel' })}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>{subtitle}</p>
        <h2 className={classes.titleText}>{title}</h2>
        <p className={classes.descriptionText}>{description}</p>
        <hr className={classes.horizontalBar} />
      </div>
      {renderAvailableTeam(format)}
      {format === 'list' &&
        <div className={classes.moreOnBench}>
          <p>...<b>20+ more</b> awesome Web Developers on bench</p>
        </div>}
      <Button
        smooth
        variant='primary'
        className={classes.getRatesButton}
        onClick={handleModal}
      >
        {buttonText}
      </Button>
      {renderDecoration(format)}
    </section>
  )
}

export default AvailableDevs
