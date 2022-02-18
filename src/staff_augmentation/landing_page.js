import { useState, useCallback, useEffect, Suspense } from 'react'
import { useRouteMatch, useHistory } from 'react-router'

import { prerenderedLazy } from 'utils/prerendered_lazy'

import Article from 'main_app/components/Article'
import FullImageHeader from './components/FullImageHeader'
import NavBar from './components/NavBar'
import NewHeader from './components/NewHeader'
import ScheduleCallModal from './components/ScheduleCallModal'
import ScheduleFormModal from './components/ScheduleFormModal'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import useLandingVariantByName from './hooks/useLandingVariantByName'

import classes from './styles.module.scss'

const LandingPageContent = prerenderedLazy(() => import('./landing_page_content'))
const interactionEvents = ['click', 'keypress', 'mousemove', 'pointermove', 'scroll', 'touchmove', 'wheel']

function LandingPage () {
  const [showContent, setShowContent] = useState(false)
  const { params } = useRouteMatch('/:name/:version?')
  const { landing } = useLandingVariantByName(params.name)
  const Header = params.version === 'b' ? FullImageHeader : NewHeader

  usePageMetadata({
    title: landing.metadata.title,
    description: landing.metadata.description
  })

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

    document.getElementById('root').classList.add(classes.root)

    return () => {
      for (const event of interactionEvents) {
        window.removeEventListener(event, showContent, { passive: true })
      }
      document.getElementById('root').classList.remove(classes.root)
    }
  }, [])

  const [isCallModalOpen, setCallModalOpen] = useState(false)
  const [isFormModalOpen, setFormModalOpen] = useState(false)
  const history = useHistory()

  const onSuccess = useCallback(() => {
    const redirectUrl = isCallModalOpen ? '/success/confirm' : '/success/confirm?scheduleCall=1'
    setCallModalOpen(false)
    setFormModalOpen(false)
    history.push(redirectUrl)
  }, [history, isCallModalOpen])
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

  return (
    <>
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
      <Suspense fallback={null}>
        {showContent && (
          <LandingPageContent
            landing={landing}
            handleContactCTAClick={handleContactCTAClick}
          />
        )}
      </Suspense>
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
