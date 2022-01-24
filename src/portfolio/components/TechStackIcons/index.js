import Image from 'main_app/components/Image'
import classes from './styles.module.scss'

function TechStackIcons({ icons }) {
  return (
    <section className={classes.container}>
      <h3 className={classes.title}>Tech Stack</h3>
      <div className={classes.listSkill} align='center'>
        {icons.map(({ id, name, photo }) => (
          <div className={classes.skill} key={id}>
            <Image src={photo} alt='' className={classes.logoSkill} />
            <p className={classes.name}>{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStackIcons
