import { useState, useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Article from 'main_app/components/Article'
import FullImageHeader from './components/FullImageHeader'
import NavBar from './components/NavBar'
import ScheduleCallModal from './components/ScheduleCallModal'

import PageMetadata from 'utils/marketing/PageMetadata'

import useLandingVariantByName from './hooks/useLandingVariantByName'
import FreeQuoteModal from './components/FreeQuoteModal'

const LandingPageContent = dynamic(() => import('./landing_page_content'))

const interactionEvents = ['click', 'keypress', 'mousemove', 'pointermove', 'scroll', 'touchmove', 'wheel']

function LandingPage ({ landingName }) {
  const [showContent, setShowContent] = useState(false)
  const { landing } = useLandingVariantByName(landingName)
  const { push } = useRouter()
  const Header = FullImageHeader

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

    return () => {
      for (const event of interactionEvents) {
        window.removeEventListener(event, showContent, { passive: true })
      }
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
      <Head>
        <style type='text/css'>
          {'body { --pageContentDesktopMinSize: 87vw !important; --pageContentDesktopMaxSize: 1400px !important; }'}
        </style>
      </Head>
      <PageMetadata
        title={landing.metadata.title}
        description={landing.metadata.description}
      />
      <NavBar
        landingName={landing.header.landingName}
        handleModal={handleContactCTAClick}
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
          formOrigin={landingName}
        />
      </Article>
      {showContent && (
        <LandingPageContent
          landing={landing}
          handleContactCTAClick={handleContactCTAClick}
          handleScheduleMeetingCTAClick={handleScheduleMeetingCTAClick}
        />
      )}
      <ScheduleCallModal
        isModalOpen={isCallModalOpen}
        setModalOpen={setCallModalOpen}
        onSubmit={onSuccess}
      />
      <FreeQuoteModal
        isModalOpen={isFormModalOpen}
        setModalOpen={setFormModalOpen}
        onScheduleMeetingClick={switchToCallModal}
        onSuccess={onSuccess}
        formOrigin={landingName}
      />
    </>
  )
}

export default LandingPage
