import classes from './styles.module.scss'

function Skill ({ id, name, photo }) {
  return (
    <li className={classes.skill}>
      <img className={classes.logoSkill} src={photo} alt='skillName' />
      <p className={classes.nameSkill}>{name}</p>
    </li>
  )
}

export default Skill
