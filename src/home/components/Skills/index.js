import classNames from 'classnames'

import Skill from '../Skill'
import useSkill from '../../hooks/useSkill'
import classes from './styles.module.scss'

function Skills ({
  showNames,
  grayscaleEffect,
  className,
  skillClassName,
  logoClassName
}) {
  const skills = useSkill()

  return (
    <div className={classNames(classes.listSkill, className)}>
      {skills.map(({
        id,
        name,
        renderedLogo
      }) => (
        <Skill
          key={id}
          renderedLogo={renderedLogo}
          name={showNames ? name : undefined}
          grayscaleEffect={grayscaleEffect}
          className={skillClassName}
          logoClassName={logoClassName}
        />
      ))}
    </div>
  )
}

export default Skills
