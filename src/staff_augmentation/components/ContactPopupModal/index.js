import { useCallback } from 'react'
import classes from './styles.module.scss'
import Modal from 'main_app/components/Modal'
import SidebarModal from '../SidebarModal'

export default function ContactPopupModal({
  isModalOpen,
  setModalOpen,
  title,
  label,
  sidebarContent,
  children
}) {
  const handleModalClose = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className={classes.modal}
      whiteCloseButton
    >
      <div className={classes.leftSideContent}>
        <p className={classes.getInTouch}>Get in Touch</p>
        <h2 className={classes.scheduleTitle}>{title}</h2>
        <p className={classes.subTitle}>{label}</p>
        <div className={classes.separator} />
        {children}
      </div>
      <SidebarModal 
        className={classes.sidebar} 
        content={sidebarContent}
      />
    </Modal>
  )
}