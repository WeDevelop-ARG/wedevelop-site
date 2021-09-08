import { useState, useCallback } from 'react'

import Modal from 'main_app/components/Modal'
import FreeQuoteForm from '../FreeQuoteForm'
import ConfirmationMessage from '../ConfirmationMessage'

import classes from './styles.module.scss'

function FreeQuoteModal ({
  isModalOpen,
  setModalOpen,
  freeQuoteForm
}) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmitFinished = useCallback(() => {
    setIsSubmitted(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setModalOpen(false)
    setIsSubmitted(false)
  }, [setModalOpen])

  const renderModalContent = (isSubmitted) => {
    if (isSubmitted) {
      return (<ConfirmationMessage />)
    } else {
      return (
        <FreeQuoteForm
          onSubmitFinished={handleSubmitFinished}
          formHeader={freeQuoteForm.formHeader}
          fixedFields={freeQuoteForm.formCustomizations.fixedFields}
          customFields={freeQuoteForm.formCustomizations.customFields}
          formButtonText={freeQuoteForm.formButtonText}
          formOrigin={freeQuoteForm.formOrigin}
          formDisclaimer={freeQuoteForm.formDisclaimer}
        />
      )
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className={classes.freeQuoteModal}
    >
      {
        renderModalContent(isSubmitted)
      }
    </Modal>
  )
}

export default FreeQuoteModal
