import { HashLink } from 'react-router-hash-link'
import Button from 'main_app/components/Button'
import classes from './schedule.module.scss'

function Schedule({ role = 'Full-Stack Developer' }) {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>Get in touch</p>
      <h3 className={classes.title}>Hire your new <span className={classes.role}>{role}</span> now!</h3>
      <p className={classes.description}>Vitae habitant blandit adipiscing porta. Nulla tortor, eu consectetur nunc. </p>
      <hr className={classes.horizontalBar} />
      <Button
        as={HashLink}
        to='/contact'
        smooth
        isAnchor
        variant='primary'
      >
        Get in Touch
          </Button>
    </div>
  )
}

export default Schedule
