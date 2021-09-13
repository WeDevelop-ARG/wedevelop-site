import { HashLink as Link } from 'react-router-hash-link'

import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function ListRow ({
  devImgURL,
  devName,
  devRole,
  devSkills,
  devExperience,
  devRate
}) {
  return (
    <>
      <div className={classes.devImgName}>
        <img src={devImgURL} alt='' className={classes.profileImg} />
        <p>{devName}</p>
      </div>
      <div className={classes.roleTech}>
        <p><b>{devRole}</b></p>
      </div>
      <div className={classes.skills}>
        {devSkills.map(({ skill, color }) => {
          color = `rgba(${color})`
          return (
            <span
              key={skill}
              style={{ backgroundColor: color }}
            >
              {skill}
            </span>
          )
        })}
      </div>
      <div className={classes.description}>
        <p>{devExperience}</p>
      </div>
      <div className={classes.rate}>
        <p>{devRate}</p>
      </div>
      <div className={classes.viewProfile}>
        <p className={classes.viewProfileText}>View Profile</p>
        <Button variant='icon' as={Link} isAnchor smooth to='#top'>
          <SVGIcon name='hire_developers/right_arrow' className={classes.rightArrow} />
        </Button>
      </div>
    </>
  )
}

export default ListRow
