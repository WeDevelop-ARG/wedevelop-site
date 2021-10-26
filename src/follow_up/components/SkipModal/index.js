import { useCallback } from 'react'

import Modal from 'main_app/components/Modal'
import SkipForm from '../SkipForm'

import classes from './styles.module.scss'

function SkipModal ({
  tracingId,
  clientName,
  isModalOpen,
  setModalOpen,
  setOpenConfirmation
}) {
  const handleSubmitFinished = useCallback(() => {
    setOpenConfirmation(true)
    setModalOpen(false)
  }, [setModalOpen, setOpenConfirmation])

  const handleModalClose = useCallback(() => {
    setOpenConfirmation(true)
    setModalOpen(false)
  }, [setModalOpen, setOpenConfirmation])
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className={classes.skipModal}
    >
      <SkipForm
        tracingId={tracingId}
        clientName={clientName}
        onSubmitFinished={handleSubmitFinished}
      />
    </Modal>
  )
}

export default SkipModal
