import Image from 'main_app/components/Image'

import classes from './styles.module.scss'

function TechStackIcons ({ icons }) {
  return (
    <section className={classes.techStackSection}>
      <div className={classes.content}>
        <h3 className={classes.title}>Tech Stack</h3>
        <div className={classes.listSkill} align='center'>
          {icons.map(({ id, name, photo }) => (
            <figure className={classes.skill} key={id}>
              <Image src={photo} alt='' className={classes.logoSkill} />
              <figcaption className={classes.name}>{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackIcons
