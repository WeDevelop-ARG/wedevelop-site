import { useState, useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import Article from 'main_app/components/Article'
import FullImageHeader from './components/FullImageHeader'
import NavBar from './components/NavBar'
import NewHeader from './components/NewHeader'
import ScheduleCallModal from './components/ScheduleCallModal'
import ScheduleFormModal from './components/ScheduleFormModal'

import PageMetadata from 'utils/marketing/PageMetadata'

import useLandingVariantByName from './hooks/useLandingVariantByName'

import classes from './styles.module.scss'

const LandingPageContent = dynamic(() => import('./landing_page_content'))

const interactionEvents = ['click', 'keypress', 'mousemove', 'pointermove', 'scroll', 'touchmove', 'wheel']

function LandingPage ({ landingName, landingVersion }) {
  const [showContent, setShowContent] = useState(false)
  const { landing } = useLandingVariantByName(landingName)
  const { push } = useRouter()
  const Header = landingVersion === 'b' ? FullImageHeader : NewHeader

  useEffect(() => {
    const showContent = () => {
      setShowContent(true)
      for (const event of interactionEvents) {
        window.removeEventListener(event, showContent, { passive: true })
      }
    }

    for (const event of interactionEvents) {
      window.addEventListener(event, showContent, { passive: true })
    }

    document.getElementById('__next').classList.add(classes.root)

    return () => {
      for (const event of interactionEvents) {
        window.removeEventListener(event, showContent, { passive: true })
      }
      document.getElementById('__next').classList.remove(classes.root)
    }
  }, [])

  const [isCallModalOpen, setCallModalOpen] = useState(false)
  const [isFormModalOpen, setFormModalOpen] = useState(false)

  const onSuccess = useCallback(() => {
    const redirectUrl = isCallModalOpen ? '/success/confirm' : '/success/confirm?scheduleCall=1'
    setCallModalOpen(false)
    setFormModalOpen(false)
    push(redirectUrl)
  }, [push, isCallModalOpen])
  const switchToCallModal = useCallback(() => {
    setFormModalOpen(false)
    setCallModalOpen(true)
  }, [])
  const handleScheduleMeetingCTAClick = useCallback(() => {
    setCallModalOpen(true)
  }, [])
  const handleContactCTAClick = useCallback(() => {
    setFormModalOpen(true)
  }, [])

  if (!landing) return null

  return (
    <>
      <PageMetadata
        title={landing.metadata.title}
        description={landing.metadata.description}
      />
      <NavBar
        landingName={landing.header.landingName}
        handleModal={handleScheduleMeetingCTAClick}
        backgroundColor={landing.header.backgroundColor}
        ctaDescription={landing.header.navBar.ctaDescription}
        buttonLabel={landing.header.navBar.buttonLabel}
      />
      <Article>
        <Header
          landingName={landing.header.landingName}
          title={landing.header.title}
          description={landing.header.description}
          backgroundColor={landing.header.backgroundColor}
          freeQuoteForm={landing.freeQuoteForm}
          quote={landing.header.quote}
          onContactCTAClick={handleContactCTAClick}
          onScheduleMeetingCTAClick={handleScheduleMeetingCTAClick}
        />
      </Article>
      {showContent && (
        <LandingPageContent
          landing={landing}
          handleContactCTAClick={handleContactCTAClick}
        />
      )}
      <ScheduleCallModal
        isModalOpen={isCallModalOpen}
        setModalOpen={setCallModalOpen}
        onSubmit={onSuccess}
      />
      <ScheduleFormModal
        isModalOpen={isFormModalOpen}
        setModalOpen={setFormModalOpen}
        onScheduleMeetingClick={switchToCallModal}
        onSubmit={onSuccess}
        formOrigin={landing.freeQuoteForm.formOrigin}
      />
    </>
  )
}

export default LandingPage
