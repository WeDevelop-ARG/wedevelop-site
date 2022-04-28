import classNames from 'classnames'
import { cloneElement } from 'react'
import classes from './styles.module.scss'

function Skill ({
  name,
  renderedLogo,
  grayscaleEffect = true,
  className,
  logoClassName
}) {
  return (
    <div
      className={classNames(
        classes.skill,
        { [classes.grayscaleEffect]: grayscaleEffect },
        className
      )}
    >
      {cloneElement(renderedLogo, {
        className: classNames(classes.logoSkill, logoClassName)
      })}
      {name && <span>{name}</span>}
    </div>
  )
}

export default Skill
