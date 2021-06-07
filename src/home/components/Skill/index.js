import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function Skill ({ name, photo }) {
  return (
    <div className={classes.skill}>
      <SVGIcon className={classes.logoSkill} name={photo} />
      <p className={classes.nameSkill}>{name}</p>
    </div>
  )
}

export default Skill
