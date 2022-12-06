import classNames from 'classnames'
import Detail from 'main_app/components/Detail'
import useTechProfiles from 'about_us/hooks/useTechProfiles'
import classes from './styles.module.scss'

export default function ProfilesContainer (props) {
  const { containerClassName } = props
  const { profiles } = useTechProfiles()

  return (
    <div className={classNames(classes.profilesContainer, containerClassName)}>
      <div className={classes.profilesColumn}>
        {profiles
          .slice(0, profiles.length / 2)
          .map(({ name }, i) => (
            <Detail key={i} name={name} />
          ))}
      </div>
      <div className={classes.profilesColumn}>
        {profiles
          .slice(profiles.length / 2, profiles.length)
          .map(({ name }, i) => (
            <Detail key={i} name={name} />
          ))}
      </div>
    </div>
  )
}
