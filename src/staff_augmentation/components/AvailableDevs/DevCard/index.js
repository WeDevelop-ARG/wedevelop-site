import Button from 'main_app/components/Button'

import getBackgroundColor from '../use_background_colors'

import classes from './styles.module.scss'

function DevCard ({
  devImgURL,
  devName,
  devRole,
  devSkills,
  devExperience,
  devRate,
  handleModal
}) {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.devExpRate}>
        <p><b>{devExperience}</b></p>
        <p><b>{devRate}</b></p>
      </div>
      <figure className={classes.devProfile}>
        <img src={devImgURL} alt='' className={classes.profileImg} />
        <figcaption>
          <p className={classes.devName}>{devName}</p>
          <p className={classes.devRole}><b>{devRole}</b></p>
        </figcaption>
      </figure>
      <div className={classes.devSkills}>
        {devSkills.map(({ skill, color }) => {
          return (
            <span
              key={skill}
              style={{ backgroundColor: getBackgroundColor(color) }}
            >
              {skill}
            </span>
          )
        })}
      </div>
      <Button
        variant='secondary'
        isAnchor
        smooth
        className={classes.viewProfileButton}
        onClick={handleModal}
      >
        View Profile
      </Button>
    </div>
  )
}

export default DevCard
