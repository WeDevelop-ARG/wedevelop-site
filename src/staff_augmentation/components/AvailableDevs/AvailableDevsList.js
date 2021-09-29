import { Fragment } from 'react'

import ListRow from './ListRow'

import classes from './styles.module.scss'

function AvailableDevsList ({ devs, handleModal }) {
  return (
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
    </div>
  )
}

export default AvailableDevsList
