import { Fragment } from 'react'

import Button from 'main_app/components/Button'
import ListRow from './ListRow'

import Background from 'assets/home/top_engineers/background.component.svg'

import classes from './styles.module.scss'

export default function AvailableDevs ({ heading, title, description, devs, buttonText, handleModal }) {
  return (
    <section className={classes.availableDevs}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>{heading}</p>
        <h2 className={classes.titleText}>{title}</h2>
        <p className={classes.descriptionText}>{description}</p>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.devsList}>
        {devs.map(({ id, devImgURL, devName, devRole, devSkills, devExperience, devRate }) => (
          <Fragment key={id}>
            <ListRow
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
      </div>
      <div className={classes.moreOnBench}>
        <p><b>120+ awesome professionals</b> waiting for you</p>
      </div>
      <Button
        variant='primary'
        className={classes.getRatesButton}
        onClick={handleModal}
      >
        {buttonText}
      </Button>
      <Background className={classes.background} viewBox='0 0 1680 1349' preserveAspectRatio='xMidYMin slice' />
    </section>
  )
}
