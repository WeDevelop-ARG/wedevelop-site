import Modal from 'main_app/components/Modal'

function ConfirmationModal ({ showModal, onModalClose, ...props }) {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onModalClose}
      {...props}
    >
    </Modal>
  )
}

export default ConfirmationModal
