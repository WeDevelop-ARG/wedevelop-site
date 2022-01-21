import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

import { FOLLOW_UP_CONTACT_PROCESSOR_URL } from 'main_app/constants'
import NotFound from 'not_found'

import WrappedImage from 'main_app/components/WrappedImage'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import MultiForm from './components/MultiForm'
import Footer from './components/Footer'
import SkipModal from './components/SkipModal'
import ConfirmationModal from './components/ConfirmationModal'

import FollowUpBackground from 'assets/follow_up/background.png'
import FollowUpMobileBackground from 'assets/follow_up/mobile_background.png'
import DotsPattern from 'assets/follow_up/dots_pattern.svg'

import classes from './styles.module.scss'

function FollowUp () {
  const { query } = useRouter()
  const [isConfirmationOpen, setConfirmationOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [contact, setContact] = useState()
  const handleModalOpen = useCallback(() => {
    setModalOpen(true)
  }, [])
  const tracingId = query.tracingId

  useEffect(() => {
    let unmounted = false
    const url = new URL(FOLLOW_UP_CONTACT_PROCESSOR_URL, window.location.href)
    url.searchParams.set('tracingId', tracingId)

    window.fetch(url.href)
      .then(async response => {
        if (unmounted) return undefined
        if (response.status >= 300) {
          setNotFound(true)
        } else {
          const contact = await response.json()
          setContact({ ...contact, name: `${contact.firstName ?? ''} ${contact.lastName ?? ''}` })
        }
      })

    return () => {
      unmounted = true
    }
  }, [tracingId])

  if (notFound) return <NotFound />
  if (!contact) return null

  return (
    <>
      <Navbar
        handleModalOpen={handleModalOpen}
      />
      <section className={classes.followUpContainer}>
        <div className={classes.stepsContainer}>
          <Intro clientName={contact?.name} />
          <MultiForm
            handleModalOpen={handleModalOpen}
            tracingId={tracingId}
            contact={contact}
          />
        </div>
        <WrappedImage src={FollowUpMobileBackground} layout='responsive' alt='' className={classes.mobileBackground} />
        <Footer />
        <WrappedImage src={FollowUpBackground} layout='intrinsic' alt='' className={classes.background} />
        <div className={classes.filledCircle} aria-hidden />
        <div className={classes.emptyCircle} aria-hidden />
        <div className={classes.blurCircle} aria-hidden />
        <WrappedImage src={DotsPattern} layout='intrinsic' alt='' className={classes.leftDotsPattern} />
      </section>
      <SkipModal
        tracingId={tracingId}
        clientName={contact?.name}
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
