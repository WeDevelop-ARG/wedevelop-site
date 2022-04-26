import classNames from 'classnames'

import Skill from '../Skill'
import useSkill from '../../hooks/useSkill'
import classes from './styles.module.scss'

function Skills ({ showNames, grayscaleEffect, className }) {
  const skills = useSkill()

  return (
    <div className={classNames(classes.listSkill, className)}>
      {skills.map(({
        id,
        name,
        photo
      }) => (
        <Skill
          key={id}
          photo={photo}
          name={showNames ? name : undefined}
          grayscaleEffect={grayscaleEffect}
        />
      ))}
    </div>
  )
}

export default Skills
