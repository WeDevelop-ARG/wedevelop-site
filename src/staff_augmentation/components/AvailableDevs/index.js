import { Fragment } from 'react'

import Button from 'main_app/components/Button'
import ListRow from './ListRow'
import DotsPattern from 'assets/home/dots_pattern.svg'

import classes from './styles.module.scss'

function AvailableDevs ({ subtitle, title, description, devs, buttonText, handleModal }) {
  return (
    <section className={classes.availableDevs}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>{subtitle}</p>
        <h2 className={classes.titleText}>{title}</h2>
        <p className={classes.descriptionText}>{description}</p>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.devsList}>
        {devs.map(({ id, devImgURL, devName, devRole, devSkills, devExperience, devRate }) => (
          <Fragment key={id}>
            <ListRow
              key={id}
              devImgURL={devImgURL}
              devName={devName}
              devRole={devRole}
              devSkills={devSkills}
              devExperience={devExperience}
              devRate={devRate}
              handleModal={handleModal}
            />
            <hr key={id} className={classes.separator} />
          </Fragment>
        ))}
        <div className={classes.moreOnBench}>
          <p>20+ more on bench</p>
        </div>
      </div>
      <Button
        smooth
        variant='primary'
        className={classes.getRatesButton}
        onClick={handleModal}
      >
        {buttonText}
      </Button>
      <div className={classes.filledCircle} aria-hidden='true' />
      <div className={classes.emptySolidCircle} aria-hidden='true' />
      <div className={classes.emptyLightCircle} aria-hidden='true' />
      <div className={classes.smallBlurCircle} aria-hidden='true' />
      <img src={DotsPattern} alt='' className={classes.dotsPattern} />
    </section>
  )
}

export default AvailableDevs
