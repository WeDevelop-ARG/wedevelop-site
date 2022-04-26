import classNames from 'classnames'
import WrappedImage from 'main_app/components/WrappedImage'
import classes from './styles.module.scss'

function Skill ({ name, photo, grayscaleEffect = true }) {
  return (
    <div className={classNames(classes.skill, { [classes.grayscaleEffect]: grayscaleEffect })}>
      <WrappedImage
        src={photo}
        layout='fixed'
        alt=''
        className={classes.logoSkill}
      />
      {name && <span>{name}</span>}
    </div>
  )
}

export default Skill
