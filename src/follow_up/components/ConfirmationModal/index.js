import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import Modal from 'main_app/components/Modal'
import ConfirmationMessage from '../ConfirmationMessage'

import classes from './styles.module.scss'

function SkipModal ({
  isConfirmationOpen,
  setConfirmationOpen
}) {
  const history = useHistory()
  const handleConfirmationClose = useCallback(() => {
    setConfirmationOpen(false)
    history.push('/')
  }, [setConfirmationOpen, history])
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
