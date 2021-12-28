import Button from 'main_app/components/Button'
import ContactPopupModal from '../ContactPopupModal'

export default function ScheduleSuccessModal({
  isModalOpen,
  setModalOpen,
}) {
  return (
    <ContactPopupModal 
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      title='Thank you for reaching out.'
      label="You'll be receiving an email with the information you submitted. One of our representatives will be in touch in no time."
      sidebarContent={
        <span>
          You'll be connected to one of our Account Managers and we'll offer our help to make your life easier.
        </span>
      }
    >
      <Button onClick={() => setModalOpen(false)}>
        Continue
      </Button>
    </ContactPopupModal>
  )
}