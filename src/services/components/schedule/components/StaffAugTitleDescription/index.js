import TextLoop from 'react-text-loop'

import roleList from './use_role_list'

import classes from './styles.module.scss'

function StaffAugTitleDescription () {
  return (
    <>
      <h2 className={classes.title}>
        <span>Hire your new</span>
        <TextLoop className={classes.textLoop}>
          {roleList.map(str => <span key={str} className={classes.role}>{str}</span>)}
        </TextLoop>
        <span>now!</span>
      </h2>
      <p className={classes.description}>
        Get a free quote within the hour. Get ready
        to boost your team with great team players.
      </p>
      {console.log(roleList)}
    </>
  )
}

export default StaffAugTitleDescription
