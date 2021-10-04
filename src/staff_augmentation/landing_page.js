import { useState, useCallback } from 'react'
import { useRouteMatch } from 'react-router'

import Article from 'main_app/components/Article'
import AvailableDevs from './components/AvailableDevs'
import BackgroundContainer from './components/BackgroundContainer'
import Footer from './components/Footer'
import FreeQuoteModal from './components/FreeQuoteModal'
import Header from './components/Header'
import HireTopTalent from './components/HireTopTalent'
import NavBar from './components/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import ReviewCards from './components/ReviewCards'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import SimpleSteps from 'services/components/simpleSteps'

import useLandingVariantByName from './hooks/useLandingVariantByName'

function LandingPage () {
  const { params } = useRouteMatch('/:name')
  const { landing } = useLandingVariantByName(params.name)

  usePageMetadata({
    title: landing.metadata.title,
    description: landing.metadata.description
  })

  const [isModalOpen, setModalOpen] = useState(false)
  const handleModalOpen = useCallback(() => {
    setModalOpen(true)
  }, [])

  return (
    <>
      <NavBar
        landingName={landing.header.landingName}
        handleModal={handleModalOpen}
        backgroundColor={landing.header.backgroundColor}
      />
      <Article>
        <Header
          landingName={landing.header.landingName}
          title={landing.header.title}
          description={landing.header.description}
          freeQuoteForm={landing.freeQuoteForm}
          sideImageURL={landing.header.sideImageURL}
          backgroundColor={landing.header.backgroundColor}
          mobileBullets={landing.header.mobileBullets}
          getFreeQuote={handleModalOpen}
        />
        <ReviewCards
          subtitle={landing.reviews.subtitle}
          title={landing.reviews.title}
          description={landing.reviews.description}
          reviews={landing.reviews.reviews}
          buttonText={landing.reviews.buttonText}
          handleModal={handleModalOpen}
        />
        <BackgroundContainer backgroundURL={landing.backgrounds.firstBackground} />
        {landing.availableDevs &&
          <AvailableDevs
            subtitle={landing.availableDevs.subtitle}
            title={landing.availableDevs.title}
            description={landing.availableDevs.description}
            devs={landing.availableDevs.devs}
            buttonText={landing.availableDevs.buttonText}
            handleModal={handleModalOpen}
          />}
        <SimpleSteps />
        <HireTopTalent
          subheadingText={landing.HireTopTalent.subtitle}
          titleText={landing.HireTopTalent.title}
          descriptionText={landing.HireTopTalent.description}
          contentText={landing.HireTopTalent.content}
          buttonText={landing.HireTopTalent.buttonText}
          handleModal={handleModalOpen}
        />
      </Article>
      <PictureWall />
      <Footer variant='light' />
      <FreeQuoteModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        freeQuoteForm={landing.freeQuoteForm}
      />
    </>
  )
}

export default LandingPage
