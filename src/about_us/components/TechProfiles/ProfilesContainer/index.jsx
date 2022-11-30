import classNames from 'classnames'
import Profile from '../Profile'
import useTechProfiles from '../tech_profiles'
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
            <Profile key={i} name={name} />
          ))}
      </div>
      <div className={classes.profilesColumn}>
        {profiles
          .slice(profiles.length / 2, profiles.length)
          .map(({ name }, i) => (
            <Profile key={i} name={name} />
          ))}
      </div>
    </div>
  )
}
