import Skill from '../Skill'
import useSkill from '../../hooks/useSkill'
import classes from './styles.module.scss'

function Skills () {
  const skills = useSkill()

  return (
    <section>
      <div className={classes.listSkill}>
        {skills.map(({
          id,
          name,
          photo
        }) => (
          <Skill
            key={id}
            photo={photo}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
