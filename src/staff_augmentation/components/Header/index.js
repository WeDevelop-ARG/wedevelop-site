import { useState, useCallback } from 'react'

import ClutchWidget from 'main_app/components/ClutchWidget'
import Modal from 'main_app/components/Modal'
import FreeQuoteForm from '../FreeQuoteForm'
import ConfirmationMessage from '../ConfirmationMessage'
import TopCompaniesBadge from 'assets/staff_augmentation/top_companies_badge.png'
import useTextsHeader from '../../hooks/useTextsHeader'

import classes from './styles.module.scss'

function Header () {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmitFinished = useCallback(() => {
    setIsSubmitted(true)
  }, [])
  const handleModalClose = useCallback(() => {
    setIsSubmitted(false)
  }, [])

  const {
    title,
    description,
    highlightedText,
    availableDetails,
    subTextButton,
    presentationPhotoURL
  } = useTextsHeader()

  return (
    <>
      <section id='headerSection' className={classes.headerContainer}>
        <div className={classes.wrapper}>
          <div className={classes.presentationContainer}>
            <h1 className={classes.titleText}>
              {title}
            </h1>
            <p className={classes.descriptionText}>
              {description}
            </p>
            <p className={classes.highlightedText}>{highlightedText}</p>
            <hr className={classes.horizontalBar} />
            <p>
              {availableDetails}
            </p>
            <div id='get-free-quote' className={classes.formContainer}>
              <FreeQuoteForm onSubmitFinished={handleSubmitFinished} />
            </div>
            <div className={classes.formDisclaimer}>
              <p>{subTextButton}</p>
            </div>
          </div>
          <div className={classes.visualsContainer}>
            <img src={presentationPhotoURL} alt='' role='presentation' className={classes.entrepreneurLaptop} />
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
