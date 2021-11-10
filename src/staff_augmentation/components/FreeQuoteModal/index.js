import { useCallback } from 'react'

import Modal from 'main_app/components/Modal'
import FreeQuoteForm from '../FreeQuoteForm'

import classes from './styles.module.scss'

function FreeQuoteModal ({
  isModalOpen,
  setModalOpen,
  freeQuoteForm
}) {
  const handleModalClose = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className={classes.freeQuoteModal}
    >
      <FreeQuoteForm
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
