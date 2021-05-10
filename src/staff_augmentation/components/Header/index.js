import { useState, useCallback } from 'react'
import FreeQuoteForm from '../FreeQuoteForm'
import ConfirmationMessage from '../ConfirmationMessage'
import EntrepreneurLaptop from 'assets/staff_augmentation/entrepreneur_laptop.png'

import classes from './styles.module.scss'

function Header () {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmitFinished = useCallback (() => {
    setIsSubmitted(true)
  }, [])
  return (
    <section id='header-section' className={classes.headerContainer}>
      <div className={classes.wrapper}>
        <div className={classes.presentationContainer}>
          <p className={classes.subheadingText}>
            IT Staff Augmentation
          </p>
          <h1 className={classes.titleText}>
            Grow your staff <span className={classes.gradientText}>in a week</span>
          </h1>
          <p className={classes.descriptionText}>
            Our experienced engineering teams deliver dream-team 
            outcomes, <span className={classes.highlightedText}>without the hassles of hiring.</span>
          </p>
        </div>
        <div id='get-free-quote' className={classes.formContainer}>
          <h3 className={classes.formTitle}>
            Efficient IT Staffing <span className={classes.gradientText}>to work for you</span>
          </h3>
          {!isSubmitted && <FreeQuoteForm onSubmitFinished={handleSubmitFinished} />}
          {isSubmitted && <ConfirmationMessage />}
        </div>
      </div>
      <img src={EntrepreneurLaptop} alt='' role='presentation' className={classes.entrepreneurLaptop} />
    </section>
  )
}

export default Header
