import Image from 'next/image'
import classes from './styles.module.scss'

function Skill ({ name, photo }) {
  return (
    <div className={classes.skill}>
      <Image src={photo} alt='' className={classes.logoSkill} />
    </div>
  )
}

export default Skill
