import { useState, useCallback } from 'react'
import { useRouteMatch } from 'react-router'
import classnames from 'classnames'

import Article from 'main_app/components/Article'
import Footer from './components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import Header from './components/Header'
import ReviewCards from './components/ReviewCards'
import GrowToday from './components/GrowToday'
import FullSizeCTA from './components/FullSizeCTA'
import SectionWithSideImage from './components/SectionWithSideImage'
import AvailableDevs from './components/AvailableDevs'
import FreeQuoteModal from './components/FreeQuoteModal'
import GrowFaster from './components/GrowFaster'
import HireTopTalent from './components/HireTopTalent'
import PictureWall from 'main_app/components/PictureWall'

import useLandingVariantByName from './hooks/useLandingVariantByName'

import classes from './styles.module.scss'

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
      <Article>
        <Header
          landingName={landing.header.landingName}
          title={landing.header.title}
          description={landing.header.description}
          freeQuoteForm={landing.freeQuoteForm}
          sideImageURL={landing.header.sideImageURL}
          backgroundColor={landing.header.backgroundColor}
        />
        <ReviewCards
          subtitle={landing.reviews.subtitle}
          title={landing.reviews.title}
          description={landing.reviews.description}
          reviews={landing.reviews.reviews}
          buttonText={landing.reviews.buttonText}
          handleModal={handleModalOpen}
        />
        <GrowToday
          subheadingText={landing.growToday.subtitle}
          titleText={landing.growToday.title}
          descriptionText={landing.growToday.description}
          contentText={landing.growToday.content}
          buttonText={landing.growToday.buttonText}
          handleModal={handleModalOpen}
        />
        <HireTopTalent
          subheadingText={landing.HireTopTalent.subtitle}
          titleText={landing.HireTopTalent.title}
          descriptionText={landing.HireTopTalent.description}
          contentText={landing.HireTopTalent.content}
          buttonText={landing.HireTopTalent.buttonText}
          handleModal={handleModalOpen}
        />
        <GrowFaster
          subheadingText={landing.GrowFaster.subtitle}
          titleText={landing.GrowFaster.title}
          descriptionText={landing.GrowFaster.description}
          contentText={landing.GrowFaster.content}
          buttonText={landing.GrowFaster.buttonText}
          handleModal={handleModalOpen}
        />
        {landing.sectionsWithSideImage.map(({
          id,
          imageURL,
          title,
          imageContainer,
          description
        }, index) => (
          <SectionWithSideImage
            key={id}
            imageURL={imageURL}
            title={title}
            imageContainer={imageContainer}
            description={description}
            imageAtRight={index % 2 !== 0}
            className={classnames({
              [classes.firstSectionWithSideImage]: index === 0,
              [classes.lastSectionWithSideImage]: index === landing.sectionsWithSideImage.length - 1
            })}
          />
        ))}
        {landing.availableDevs &&
          <AvailableDevs
            title={landing.availableDevs.title}
            devs={landing.availableDevs.devs}
          />}
        <FullSizeCTA
          title={landing.fullSizeCTA.title}
          subTitle={landing.fullSizeCTA.subTitle}
          ctaText={landing.fullSizeCTA.ctaText}
          description={landing.fullSizeCTA.description}
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
