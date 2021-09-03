import classes from './styles.module.scss'

function Skill ({ name, photo }) {
  return (
    <div className={classes.skill}>
      <img src={photo} alt='' className={classes.logoSkill} />
    </div>
  )
}

export default Skill
