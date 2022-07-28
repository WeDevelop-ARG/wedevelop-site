import React from 'react'

import Button from 'main_app/components/Button'
import classes from './styles.module.scss'

const ContactCTA = ({ onCTAClick }) => {
  return (
    <div className={classes.ctaContactUsContainer}>
      <p>Hire Cost-Efficent &amp; Experienced Softward Developers</p>
      <Button
        className={classes.ctaButton}
        onClick={onCTAClick}
      >
        Contact Us
      </Button>
    </div>
  )
}

export default ContactCTA