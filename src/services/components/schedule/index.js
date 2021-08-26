import { HashLink } from 'react-router-hash-link'
import Button from 'main_app/components/Button'
import background from 'assets/services/background-schedule.png'
import patternHorizontal from 'assets/services/dots-pattern-horizontal.svg'
import classes from './schedule.module.scss'

function Schedule({ role = 'Full-Stack Developer' }) {
  return (
    <>
      <div className={classes.container}>
      <p className={classes.heading}>Get in touch</p>
        <h2 className={classes.title}>Hire your new <span className={classes.role}>{role}</span> now!</h2>
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
    <img className={classes.background} src={background} alt="" />
      <img className={classes.patternHorizontalLeft} src={patternHorizontal} alt="" />
      <img className={classes.patternHorizontalRight} src={patternHorizontal} alt="" />
    </>
  )
}

export default Schedule
