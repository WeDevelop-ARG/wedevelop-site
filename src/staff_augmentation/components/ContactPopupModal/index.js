import { useCallback } from 'react'

import useMediaQuery from 'utils/use_media_query'
import { forDesktopUp } from 'styles/media_queries'

import Modal from 'main_app/components/Modal'
import SidebarModal from '../SidebarModal'

import XShapeWhite from 'assets/staff_augmentation/x_shape_white.svg'

import classes from './styles.module.scss'

export default function ContactPopupModal ({
  isModalOpen,
  setModalOpen,
  title,
  label,
  sidebarContent,
  children
}) {
  const isDesktop = useMediaQuery(forDesktopUp)
  const handleModalClose = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className={classes.modal}
      icon={isDesktop ? XShapeWhite : undefined}
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
