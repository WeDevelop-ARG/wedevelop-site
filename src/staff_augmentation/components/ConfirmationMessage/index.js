import SVGIcon from 'main_app/components/SVGIcon'

import ConfirmationModal from './ConfirmationModal'

import classes from './styles.module.scss'

function ConfirmationMessage ({ showModal, onModalClose }) {
  return (
    <ConfirmationModal 
      showModal={showModal}
      onModalClose={onModalClose}
    >
      <div className={classes.confirmationBadge}>
        <SVGIcon name='staff_augmentation/check_sign' className={classes.checkSign} />
      </div>
      <div className={classes.messageSent}>
        <h2>We got it.</h2>
        <p>Thanks for reaching out to us!</p>
        <p>We'll get back to you as soon as we can with our rates and available staff! :)</p>
      </div>
      <div className={classes.addSomething}>
        <p>Forgot to say something important?</p>
        <p>Send us a new message or write us at <a href='mailto:info@wedevelop.me'>info@wedevelop.me</a></p>
      </div>
    </ConfirmationModal>
  )
}

export default ConfirmationMessage
