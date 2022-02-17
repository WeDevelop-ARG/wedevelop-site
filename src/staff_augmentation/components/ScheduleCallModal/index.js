import ContactPopupModal from '../ContactPopupModal'
import HubSpotCalendar from 'main_app/components/HubSpotCalendar'

export default function ScheduleCallModal ({
  isModalOpen,
  setModalOpen,
  onSubmit
}) {
  return (
    <ContactPopupModal
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      title='Schedule a 15 minute consultation'
      label="If we can help in any way, please don't hesitate to set a time to meet or talk, or leave your details and we'll get back to you."
      sidebarContent={
        <span>
          You'll be connected to one of our Account Managers and we'll offer our help to make your life easier.
        </span>
      }
    >
      <HubSpotCalendar
        hideText
        onFinish={() => onSubmit?.()}
      />
    </ContactPopupModal>
  )
}
