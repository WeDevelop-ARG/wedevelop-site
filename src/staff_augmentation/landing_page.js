import { useState, useCallback, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router'

import Article from 'main_app/components/Article'
import AvailableDevs from './components/AvailableDevs'
import BackgroundContainer from './components/BackgroundContainer'
import Footer from './components/Footer'
import FullSizeCTA from './components/FullSizeCTA'
import HireTopTalent from './components/HireTopTalent'
import HowDoesItWorks from 'main_app/components/HowDoesItWorks'
import NavBar from './components/NavBar'
import NewHeader from './components/NewHeader'
import PictureWall from 'main_app/components/PictureWall'
import ReviewCards from './components/ReviewCards'
import ScheduleCallModal from './components/ScheduleCallModal'
import ScheduleFormModal from './components/ScheduleFormModal'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import useLandingVariantByName from './hooks/useLandingVariantByName'

import classes from './styles.module.scss'

function LandingPage () {
  const { params } = useRouteMatch('/:name')
  const { landing } = useLandingVariantByName(params.name)

  usePageMetadata({
    title: landing.metadata.title,
    description: landing.metadata.description
  })

  useEffect(() => {
    document.getElementById('root').classList.add(classes.root)

    return () => {
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
        <NewHeader
          landingName={landing.header.landingName}
          title={landing.header.title}
          description={landing.header.description}
          backgroundColor={landing.header.backgroundColor}
          freeQuoteForm={landing.freeQuoteForm}
          quote={landing.header.quote}
          onContactCTAClick={handleContactCTAClick}
          onScheduleMeetingCTAClick={handleScheduleMeetingCTAClick}
        />
        <HireTopTalent
          subheadingText={landing.HireTopTalent.subtitle}
          titleText={landing.HireTopTalent.title}
          descriptionText={landing.HireTopTalent.description}
          contentText={landing.HireTopTalent.content}
          buttonText={landing.HireTopTalent.buttonText}
          handleModal={handleContactCTAClick}
        />
        <BackgroundContainer backgroundURL={landing.backgrounds.firstBackground} />
        {landing.availableDevs &&
          <AvailableDevs
            subtitle={landing.availableDevs.subtitle}
            title={landing.availableDevs.title}
            description={landing.availableDevs.description}
            devs={landing.availableDevs.devs}
            buttonText={landing.availableDevs.buttonText}
            handleModal={handleContactCTAClick}
          />}
        <HowDoesItWorks />
        <ReviewCards
          subtitle={landing.reviews.subtitle}
          title={landing.reviews.title}
          description={landing.reviews.description}
          reviews={landing.reviews.reviews}
          buttonText={landing.reviews.buttonText}
          handleModal={handleContactCTAClick}
        />
        <FullSizeCTA
          title={landing.fullSizeCTA.title}
          subTitle={landing.fullSizeCTA.subTitle}
          ctaText={landing.fullSizeCTA.ctaText}
          ctaToPath={landing.fullSizeCTA.ctaToPath}
          description={landing.fullSizeCTA.description}
          handleModal={handleContactCTAClick}
        />
      </Article>
      <PictureWall />
      <Footer variant='light' />
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
