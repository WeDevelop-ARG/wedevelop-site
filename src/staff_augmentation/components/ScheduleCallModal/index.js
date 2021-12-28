import { useCallback } from 'react'
import classes from './styles.module.scss'
import Modal from 'main_app/components/Modal'
import CalendlyWidget from 'main_app/components/CalendlyWidget'
import SidebarModal from '../SidebarModal'
import CloseWhiteShape from 'assets/staff_augmentation/x_shape_white.svg'
import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

export default function ScheduleCallModal({
  isModalOpen,
  setModalOpen,
}) {
  const handleModalClose = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className={classes.modal}
    >
      <Button variant='icon' className={classes.closeButton} onClick={handleModalClose}>
        <Image src={CloseWhiteShape} />
      </Button>
      <div className={classes.leftSideContent}>
        <p className={classes.getInTouch}>Get in Touch</p>
        <h2 className={classes.scheduleTitle}>Schedule a 15 minute consultation</h2>
        <p className={classes.subTitle}>If we can help in any way, please don't hesitate to set a time to meet or talk, or leave your details and we'll get back to you.</p>
        <div className={classes.separator} />
        <CalendlyWidget hideText />
      </div>
      <SidebarModal className={classes.sidebar} />
    </Modal>
  )
}