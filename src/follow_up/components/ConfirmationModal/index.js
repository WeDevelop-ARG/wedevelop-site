import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Modal from 'main_app/components/Modal'
import ConfirmationMessage from '../ConfirmationMessage'

import classes from './styles.module.scss'

function SkipModal ({
  isConfirmationOpen,
  setConfirmationOpen
}) {
  const { push } = useRouter()
  const handleConfirmationClose = useCallback(() => {
    setConfirmationOpen(false)
    push('/')
  }, [setConfirmationOpen, push])
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
