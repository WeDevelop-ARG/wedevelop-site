import { createContext, useState } from 'react'
import ScheduleCallModal from '../ScheduleCallModal'
import ScheduleFormModal from '../ScheduleFormModal'

const ContactPopupContext = createContext({
  setCallModalOpen: (open) => {},
  setFormModalOpen: (open) => {}
});

export function ContactPopupProvider({ children }) {
  const [isCallModalOpen, setCallModalOpen] = useState(false)
  const [isFormModalOpen, setFormModalOpen] = useState(false)

  return (
    <ContactPopupContext.Provider
      value={{
        setCallModalOpen,
        setFormModalOpen,
      }}
    >
      <ScheduleCallModal isModalOpen={isCallModalOpen} setModalOpen={setCallModalOpen} />
      <ScheduleFormModal isModalOpen={isFormModalOpen} setModalOpen={setFormModalOpen} />
      {children}
    </ContactPopupContext.Provider>
  );
}

export default ContactPopupContext