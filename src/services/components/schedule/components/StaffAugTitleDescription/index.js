import TextLoop from 'react-text-loop'

import roleList from './use_role_list'

import classes from './styles.module.scss'

function StaffAugTitleDescription () {
  return (
    <>
      <h2 className={classes.title}>
        <span>Hire your new</span>
        <TextLoop delay={1500} className={classes.textLoop}>
          {roleList.map(str => <div key={str} className={classes.role}>{str}</div>)}
        </TextLoop>
        <span>now!</span>
      </h2>
      <p className={classes.description}>
        Get a free quote within the hour. Get ready
        to boost your team with great team players.
      </p>
    </>
  )
}

export default StaffAugTitleDescription
