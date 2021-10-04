import { useState, useCallback } from 'react'

import Button from 'main_app/components/Button'
import ClutchWidget from 'main_app/components/ClutchWidget'
import ConfirmationMessage from '../ConfirmationMessage'
import FreeQuoteForm from '../FreeQuoteForm'
import Image from 'main_app/components/Image'
import Logo from 'main_app/components/Logo'
import Modal from 'main_app/components/Modal'
import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function Header ({
  landingName,
  title,
  description,
  freeQuoteForm,
  sideImageURL,
  backgroundColor,
  getFreeQuote
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
            <div className={classes.tagNameContainer}><span className={classes.tagName} style={{ backgroundColor }}>{landingName}</span></div>
            <h1 className={classes.titleText}>{title}</h1>
            <div className={classes.description}>{description}</div>
            <div className={classes.clutchCircle}>
              <ClutchWidget className={classes.clutchWidget} variant='dark' />
              <div className={classes.filledCircle} />
              <div className={classes.emptyCircle} />
            </div>
            <hr className={classes.horizontalBar} />
            <Button
              smooth
              isAnchor
              variant='primary'
              className={classes.freeQuoteButton}
              onClick={getFreeQuote}
            >
              Get a Free Quote
            </Button>
          </div>
          <div id='get-free-quote' className={classes.formContainer}>
            <FreeQuoteForm
              noAutofocus
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
          <Image objectFit='cover' className={classes.imgHeader} src={sideImageURL} alt='' />
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
