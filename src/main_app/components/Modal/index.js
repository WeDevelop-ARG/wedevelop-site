import ReactModal from 'react-modal'
import classnames from 'classnames'

import SVGIcon from 'main_app/components/SVGIcon'

import classes from './styles.module.scss'

function Modal ({ children, className, isOpen, onRequestClose }) {
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById('root')}
      className={classnames(classes.modal, className)}
      overlayClassName={classes.overlay}
      portalClassName={classes.portal}
      contentLabel={'Confirmation Message'}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <div className={classes.close}>
        <SVGIcon name={'staff_augmentation/x_shape'} onClick={onRequestClose} />
      </div>
      {children}
    </ReactModal>
  )
}

export default Modal
