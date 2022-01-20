import WrappedImage from 'main_app/components/WrappedImage'
import classes from './styles.module.scss'

function Skill ({ name, photo }) {
  return (
    <div className={classes.skill}>
      <WrappedImage src={photo} layout='fixed' alt='' className={classes.logoSkill} />
    </div>
  )
}

export default Skill
