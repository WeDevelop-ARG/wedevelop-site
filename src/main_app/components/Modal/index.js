import ReactModal from 'react-modal'
import classnames from 'classnames'

import Button from 'main_app/components/Button'
import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function Modal ({
  children,
  className,
  isOpen,
  onRequestClose,
  contentLabel,
  whiteCloseButton = false,
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById('root')}
      bodyOpenClassName={classes.bodyModalOpen}
      className={classnames(classes.modal, className)}
      overlayClassName={classes.overlay}
      contentLabel={contentLabel}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <Button variant='icon' onClick={onRequestClose} className={classes.close}>
        <SVGIcon name={whiteCloseButton ? 'staff_augmentation/x_shape_white' : 'staff_augmentation/x_shape'} />
      </Button>
      {children}
    </ReactModal>
  )
}

export default Modal
