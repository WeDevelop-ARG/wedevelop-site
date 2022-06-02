import Button from 'main_app/components/Button'
import ContactPopupModal from '../ContactPopupModal'

import FreeQuoteForm from '../FreeQuoteForm'

import classes from './styles.module.scss'

function FreeQuoteModal ({
  isModalOpen,
  setModalOpen,
  onScheduleMeetingClick,
  onSuccess,
  formOrigin
}) {
  return (
    <ContactPopupModal
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      title="We'd love hear from you"
      label='Get Custom Solutions, Recommendations, Resumes, or Estimates. Confidentiality & Same Day Response Guaranteed!'
      sidebarContent={
        <span>
          One of our Account Managers will contact you shortly. <br /><br />
          We usually get back in two hours or less. Should you need a faster response,{' '}
          <Button variant='link' className={classes.bookTimeButton} onClick={() => onScheduleMeetingClick?.()}>book a time here</Button>.
        </span>
      }
    >
      <FreeQuoteForm
        formOrigin={formOrigin}
        onSuccess={onSuccess}
      />
    </ContactPopupModal>
  )
}

export default FreeQuoteModal
