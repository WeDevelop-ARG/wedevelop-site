import { useState, useCallback } from 'react'

import ClutchWidget from 'main_app/components/ClutchWidget'
import Modal from 'main_app/components/Modal'
import SVGIcon from 'main_app/components/SVGIcon'
import Logo from 'main_app/components/Logo'
import FreeQuoteForm from '../FreeQuoteForm'
import ConfirmationMessage from '../ConfirmationMessage'

import classes from './styles.module.scss'

function Header ({
  landingName,
  title,
  description,
  freeQuoteForm,
  sideImageURL,
  backgroundColor
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
            <div className={classes.logoContainer}><Logo variant='white' /></div>
            <div className={classes.tagNameContainer}><span className={classes.tagName} style={{ backgroundColor: backgroundColor }}>{landingName}</span></div>
            <h1 className={classes.titleText}>{title}</h1>
            <div className={classes.description}>{description}</div>
            <div className={classes.clutchCircle}>
              <ClutchWidget className={classes.clutchWidget} variant='dark' />
              <div className={classes.filledCircle} />
              <div className={classes.emptyCircle} />
            </div>
          </div>
          <div id='get-free-quote' className={classes.formContainer}>
            <FreeQuoteForm
              onSubmitFinished={handleSubmitFinished}
              formHeader={freeQuoteForm.formHeader}
              fixedFields={freeQuoteForm.formCustomizations.fixedFields}
              customFields={freeQuoteForm.formCustomizations.customFields}
              formButtonText={freeQuoteForm.formButtonText}
              formOrigin={freeQuoteForm.formOrigin}
              formDisclaimer={freeQuoteForm.formDisclaimer}
            />
          </div>
        </div>
        <div className={classes.decorationWrapper}>
          <img className={classes.imgHeader} src={sideImageURL} alt='' />
        </div>
        <div className={classes.pattern}>
          <SVGIcon name='home/header/pattern' />
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
