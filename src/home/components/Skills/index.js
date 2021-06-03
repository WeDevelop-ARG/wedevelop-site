import Skill from '../Skill'
import useSkill from '../../hooks/useSkill'
import classes from './styles.module.scss'

function Skills () {
  const skills = useSkill()

  return (
    <div className={classes.altSection}>
      <h2 className={classes.title}>We have all the skills you need</h2>
      <ul className={classes.listSkill}>
        {skills.map(({
          id,
          name,
          photo
        }, index) => (
          <Skill
            key={id}
            name={name}
            photo={photo}
          />
        ))}
      </ul>
    </div>
  )
}

export default Skills
