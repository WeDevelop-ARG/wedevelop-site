import { useState, useCallback } from 'react'

import Modal from 'main_app/components/Modal'
import SkipForm from '../SkipForm'

import classes from './styles.module.scss'

function SkipModal ({
  isModalOpen,
  setModalOpen
}) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmitFinished = useCallback(() => {
    setIsSubmitted(true)
    setModalOpen(false)
  }, [setModalOpen])

  const handleModalClose = useCallback(() => {
    setModalOpen(false)
    setIsSubmitted(false)
  }, [setModalOpen])
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className={classes.skipModal}
    >
      <SkipForm onSubmitFinished={handleSubmitFinished} />
    </Modal>
  )
}

export default SkipModal
