import { useCallback } from 'react'

import Modal from 'main_app/components/Modal'
import ConfirmationMessage from '../ConfirmationMessage'

import classes from './styles.module.scss'
import { Router } from 'next/router'

function SkipModal ({
  isConfirmationOpen,
  setConfirmationOpen
}) {
  const handleConfirmationClose = useCallback(() => {
    setConfirmationOpen(false)
    Router.push('/')
  }, [setConfirmationOpen])
  return (
    <Modal
      isOpen={isConfirmationOpen}
      onRequestClose={handleConfirmationClose}
      className={classes.confirmationModal}
    >
      <ConfirmationMessage />
    </Modal>
  )
}

export default SkipModal
