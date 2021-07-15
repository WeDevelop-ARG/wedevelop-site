import Modal from 'main_app/components/Modal'
import CalendlyWidget from 'main_app/components/CalendlyWidget'
import Button from 'main_app/components/Button'

import classes from './styles.module.scss'

function ContactModal ({ isOpen, onRequestClose }) {
  return (
    <Modal
      className={classes.contactModal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Schedule a call'
    >
      <section className={classes.modalContent}>
        <p className={classes.subheadingText}>GET IN TOUCH</p>
        <h1 className={classes.titleText}>Schedule a call with us</h1>
        <p className={classes.descriptionText}>We look forward to learning how WeDevelop can help you and your business</p>
        <hr className={classes.horizontalBar} />
        <CalendlyWidget sourcePage='contact' />
        <div className={classes.btnContainer}>
          <Button
            isAnchor
            variant='secondary'
            className={classes.cancelButton}
            onClick={onRequestClose}
          >
            Cancel
          </Button>
        </div>
      </section>
    </Modal>
  )
}

export default ContactModal
