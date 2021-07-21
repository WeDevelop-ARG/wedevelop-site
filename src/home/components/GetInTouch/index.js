import { HashLink } from 'react-router-hash-link'

import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function GetInTouch () {
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
          as={HashLink}
          to='/contact'
          smooth
          isAnchor
          variant='primary'
          className={classes.buttonTalk}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  )
}

export default GetInTouch
