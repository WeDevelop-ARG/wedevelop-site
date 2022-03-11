import ReactModal from 'react-modal'
import classnames from 'classnames'
import Image from 'main_app/components/Image'

import Button from 'main_app/components/Button'

import XShape from 'assets/staff_augmentation/x_shape.svg'

import classes from './styles.module.scss'

function Modal ({
  children,
  className,
  isOpen,
  onRequestClose,
  contentLabel,
  icon = XShape
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={globalThis.document?.getElementById('__next')}
      bodyOpenClassName={classes.bodyModalOpen}
      className={classnames(classes.modal, className)}
      overlayClassName={classes.overlay}
      contentLabel={contentLabel}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <Button variant='icon' onClick={onRequestClose} className={classes.close}>
        <Image src={icon} alt='Close' />
      </Button>
      {children}
    </ReactModal>
  )
}

export default Modal
