import { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import Modal from 'main_app/components/Modal'
import FreeQuoteForm from '../FreeQuoteForm'

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

  const history = useHistory()
  if (isSubmitted) history.push('/follow-up')

  const handleModalClose = useCallback(() => {
    setModalOpen(false)
    setIsSubmitted(false)
  }, [setModalOpen])

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className={classes.freeQuoteModal}
    >
      <FreeQuoteForm
        onSubmitFinished={handleSubmitFinished}
        formHeader={freeQuoteForm.formHeader}
        fixedFields={freeQuoteForm.formCustomizations.fixedFields}
        customFields={freeQuoteForm.formCustomizations.customFields}
        formButtonText={freeQuoteForm.formButtonText}
        formOrigin={freeQuoteForm.formOrigin}
        formDisclaimer={freeQuoteForm.formDisclaimer}
      />
    </Modal>
  )
}

export default FreeQuoteModal
