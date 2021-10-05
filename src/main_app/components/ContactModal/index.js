import Button from 'main_app/components/Button'
import CalendlyWidget from 'main_app/components/CalendlyWidget'
import Modal from 'main_app/components/Modal'

import classes from './styles.module.scss'

function ContactModal ({ isOpen, onRequestClose }) {
  return (
    <Modal
      className={classes.contactModal}
      isOpen
      onRequestClose={onRequestClose}
      contentLabel='Schedule a call'
    >
      <div className={classes.modalHeader}>
        <p className={classes.subheadingText}>GET IN TOUCH</p>
        <h1 className={classes.titleText}>Schedule a call with us</h1>
        <p className={classes.descriptionText}>We look forward to learning how WeDevelop can help you and your business</p>
        <hr className={classes.horizontalBar} />
      </div>
      <section className={classes.calendlyWidget}>
        <CalendlyWidget sourcePage='contact' />
      </section>
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
    </Modal>
  )
}

export default ContactModal
