import Skill from '../Skill'
import useSkill from '../../hooks/useSkill'
import classes from './styles.module.scss'

function Skills () {
  const skills = useSkill()

  return (
    <section className={classes.altSection}>
      <h2 className={classes.title}>
        We have all the skills you need
      </h2>
      <div className={classes.listSkill}>
        {skills.map(({
          name,
          photo
        }, index) => (
          <Skill
            key={index}
            name={name}
            photo={photo}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
