import classes from './styles.module.scss'
import useOtherTechnologies from './other_technologies'
import WrappedImage from '../../../main_app/components/WrappedImage'

export default function OtherTechnologies () {
  const { technologies } = useOtherTechnologies()

  return (
    <section className={classes.otherTechnologies}>
      <div className={classes.logosWall}>
        {technologies.map(technology => (
          <WrappedImage
            key={technology.id}
            src={technology.src}
            width={technology.width}
            height={technology.height}
            alt={technology.alt}
            className={classes.technology}
          />
        ))}
      </div>
    </section>
  )
}
