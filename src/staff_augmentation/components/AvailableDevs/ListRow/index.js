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
    <ul className={classes.devRow}>
      <li className={classes.devImgName}>
        <div className={classes.profileImgContainer}>
          <img src={devImgURL} alt='' className={classes.profileImg} />
        </div>
        <p>{devName}</p>
      </li>
      <li className={classes.roleTech}>
        <b>{devRole}</b>
      </li>
      <li className={classes.skills}>
        {devSkills.map(({ skill, color }) => (
          <span key={skill}>{skill}</span>
        ))}
      </li>
      <li className={classes.description}>
        {devExperience}
      </li>
      <li className={classes.rate}>
        <p>{devRate}</p>
      </li>
      <li className={classes.viewProfile}>
        <p className={classes.viewProfileText}>View Profile</p>
        <Button variant='icon' as={Link} isAnchor smooth to='#top'>
          <SVGIcon name='hire_developers/right_arrow' className={classes.rightArrow} />
        </Button>
      </li>
    </ul>
  )
}

export default ListRow
