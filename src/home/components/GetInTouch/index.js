import { useHistory } from 'react-router'

import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function GetInTouch () {
  const history = useHistory()

  return (
    <section className={classes.getInTouch}>
      <div className={classes.sectionContent}>
        <p className={classes.subheadingText}>Get in touch</p>
        <h2 className={classes.titleText}>Schedule a call with us</h2>
        <p className={classes.descriptionText}>
          We look forward to learning how WeDevelop can help you and your business
        </p>
        <hr className={classes.horizontalBar} />
        <Button
          isAnchor
          variant='primary'
          className={classes.buttonTalk}
          onClick={() => history.push('/contact')}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  )
}

export default GetInTouch
