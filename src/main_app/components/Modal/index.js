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
  iconName = 'x_shape'
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
        <SVGIcon name={`staff_augmentation/${iconName}`} />
      </Button>
      {children}
    </ReactModal>
  )
}

export default Modal
