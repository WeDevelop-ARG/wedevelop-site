import WrappedImage from 'main_app/components/WrappedImage'
import CheckSign from 'assets/staff_augmentation/check_sign.svg'
import classes from './styles.module.scss'

function ConfirmationMessage ({ showModal, onModalClose }) {
  return (
    <div className={classes.container}>
      <div className={classes.confirmationBadge}>
        <WrappedImage src={CheckSign} className={classes.checkSign} />
      </div>
      <div className={classes.messageSent}>
        <h2>We got it.</h2>
        <p>Thanks for reaching out to us!</p>
        <p>We'll get back to you as soon as we can with our rates and available staff! :)</p>
      </div>
      <div className={classes.addSomething}>
        <p>Forgot to say something important?</p>
        <p>Send us a new message or write us at <a href='mailto:staffing@wedevelop.me'>staffing@wedevelop.me</a></p>
      </div>
    </div>
  )
}

export default ConfirmationMessage
