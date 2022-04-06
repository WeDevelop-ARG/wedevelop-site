import TextLoop from 'react-text-loop'

import roleList from './use_role_list'

import classes from './styles.module.scss'

function StaffAugTitleDescription () {
  return (
    <>
      <h2 className={classes.title}>
        <span>Hire your new</span>
        <TextLoop delay={750} interval={1500} className={classes.textLoop}>
          {roleList.map(str => <div key={str} className={classes.role}>{str}</div>)}
        </TextLoop>
        <span>now!</span>
      </h2>
      <p className={classes.description}>
        Get a free quote within the hour. Get ready
        to take your team to the next level.
      </p>
    </>
  )
}

export default StaffAugTitleDescription
