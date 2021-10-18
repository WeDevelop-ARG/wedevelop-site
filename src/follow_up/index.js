import { useState, useCallback } from 'react'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import MultiForm from './components/MultiForm'
import Footer from './components/Footer'
import SkipModal from './components/SkipModal'
import ConfirmationModal from './components/ConfirmationModal'
import Image from 'main_app/components/Image'

import FollowUpBackground from 'assets/follow_up/background.png'
import FollowUpMobileBackground from 'assets/follow_up/mobile_background.png'
import DotsPattern from 'assets/follow_up/dots_pattern.svg'

import classes from './styles.module.scss'

function FollowUp () {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const handleModalOpen = useCallback(() => {
    setModalOpen(true)
  }, [])
  // TODO: Obtener nombre del cliente desde los datos guardados con Free Quote Form y pasarlo al componente Intro como prop.
  const provisionalName = 'Jhon'
  return (
    <>
      <Navbar
        handleModalOpen={handleModalOpen}
      />
      <section className={classes.followUpContainer}>
        <div className={classes.stepsContainer}>
          <Intro clientName={provisionalName} />
          <MultiForm
            handleModalOpen={handleModalOpen}
          />
        </div>
        <Image src={FollowUpMobileBackground} alt='' className={classes.mobileBackground} />
        <Footer />
        <Image src={FollowUpBackground} alt='' className={classes.background} />
        <div className={classes.filledCircle} aria-hidden />
        <div className={classes.emptyCircle} aria-hidden />
        <div className={classes.blurCircle} aria-hidden />
        <Image src={DotsPattern} alt='' className={classes.leftDotsPattern} />
      </section>
      <SkipModal
        clientName={provisionalName}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        setOpenConfirmation={setConfirmationOpen}
      />
      <ConfirmationModal
        isConfirmationOpen={isConfirmationOpen}
        setConfirmationOpen={setConfirmationOpen}
      />
    </>
  )
}

export default FollowUp
