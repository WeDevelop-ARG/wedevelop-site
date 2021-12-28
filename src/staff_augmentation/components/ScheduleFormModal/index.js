import Button from 'main_app/components/Button'
import ContactPopupModal from '../ContactPopupModal'
import classes from './styles.module.scss'
import ContactPopupContext from '../ContactPopupModal/Context'
import { useContext } from 'react'
import { useCallback } from 'react'

export default function ScheduleFormModal({
  isModalOpen,
  setModalOpen,
}) {
  const { setCallModalOpen, setFormModalOpen } = useContext(ContactPopupContext)

  const switchToBookTime = useCallback(() => {
    setFormModalOpen(false)
    setCallModalOpen(true)
  }, [setCallModalOpen, setFormModalOpen])

  return (
    <ContactPopupModal 
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      title="We'd love hear from you"
      label="Get Custom Solutions, Recommendations, Resumes, or, Estimates. Confidentiality & Same Day Response Guaranteed!"
      sidebarContent={
        <span>
          One of our Account Managers will contact you shortly. <br /><br />
          We usually get back in two hours or less. Should you need a faster response,{' '}
          <Button variant='link' className={classes.bookTimeButton} onClick={switchToBookTime}>book a time here</Button>.
        </span>
      }
    >
     {/* TODO: Add Form */}
    </ContactPopupModal>
  )
}