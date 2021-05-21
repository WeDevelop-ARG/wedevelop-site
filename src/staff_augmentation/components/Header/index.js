import { useState, useCallback } from 'react'

import ClutchWidget from 'main_app/components/ClutchWidget'
import Modal from 'main_app/components/Modal'
import FreeQuoteForm from '../FreeQuoteForm'
import ConfirmationMessage from '../ConfirmationMessage'
import AbelLaptop from 'assets/staff_augmentation/abel_laptop.png'
import TopCompaniesBadge from 'assets/staff_augmentation/top_companies_badge.png'

import classes from './styles.module.scss'

function Header () {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmitFinished = useCallback(() => {
    setIsSubmitted(true)
  }, [])
  const handleModalClose = useCallback(() => {
    setIsSubmitted(false)
  }, [])

  return (
    <>
      <section id='headerSection' className={classes.headerContainer}>
        <div className={classes.wrapper}>
          <div className={classes.presentationContainer}>
            <h1 className={classes.titleText}>
              Hire top web developers <span className={classes.gradientText}>in 48h</span>
            </h1>
            <p className={classes.descriptionText}>
              Get access to the top Software Engineers in Latin America.
            </p>
            <p className={classes.highlightedText}>Fast, without the hiring hassles.</p>
            <hr className={classes.horizontalBar} />
            <p className={classes.gradientText}>
              Sign Up to Get Rates &amp; Available Staff Details
            </p>
            <div id='get-free-quote' className={classes.formContainer}>
              <FreeQuoteForm onSubmitFinished={handleSubmitFinished} />
            </div>
            <div className={classes.formDisclaimer}>
              <p>
                We typically reply every email within an hour.
              </p>
            </div>
          </div>
          <div className={classes.visualsContainer}>
            <img src={AbelLaptop} alt='' role='presentation' className={classes.entrepreneurLaptop} />
            <div className={classes.widgetsContainer}>
              <ClutchWidget className={classes.clutchWidget} variant='dark' />
              <img src={TopCompaniesBadge} alt='' role='presentation' className={classes.topCompaniesBadge} />
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={isSubmitted}
        onRequestClose={handleModalClose}
        contentLabel='Confirmation Message'
      >
        <ConfirmationMessage />
      </Modal>
    </>
  )
}

export default Header
