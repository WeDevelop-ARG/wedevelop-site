import { useState, useCallback } from 'react'

import ClutchWidget from 'main_app/components/ClutchWidget'
import Modal from 'main_app/components/Modal'
import FreeQuoteForm from '../FreeQuoteForm'
import ConfirmationMessage from '../ConfirmationMessage'
import TopCompaniesBadge from 'assets/staff_augmentation/top_companies_badge.png'

import classes from './styles.module.scss'

function Header ({
  title,
  description,
  formDescription,
  formOrigin,
  sideImageURL,
  submitButtonText
}) {
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
            <h1 className={classes.titleText}>{title}</h1>
            <div className={classes.description}>{description}</div>
            <hr className={classes.horizontalBar} />
            <p>{formDescription}</p>
            <div id='get-free-quote' className={classes.formContainer}>
              <FreeQuoteForm
                onSubmitFinished={handleSubmitFinished}
                submitButtonText={submitButtonText}
                formOrigin={formOrigin}
              />
            </div>
            <div className={classes.formDisclaimer}>
              <p>We typically reply every email within an hour.</p>
            </div>
          </div>
          <div className={classes.visualsContainer}>
            <img src={sideImageURL} alt='' role='presentation' className={classes.entrepreneurLaptop} loading='lazy' />
            <div className={classes.widgetsContainer}>
              <ClutchWidget className={classes.clutchWidget} variant='dark' />
              <img src={TopCompaniesBadge} alt='' role='presentation' className={classes.topCompaniesBadge} loading='lazy' />
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
