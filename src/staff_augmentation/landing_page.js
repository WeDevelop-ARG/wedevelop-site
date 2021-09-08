import { useRouteMatch } from 'react-router'

import Article from 'main_app/components/Article'
import Footer from './components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import Header from './components/Header'
import ReviewCards from './components/ReviewCards'
import GrowToday from './components/GrowToday'
import FullSizeCTA from './components/FullSizeCTA'
import AvailableDevs from './components/AvailableDevs'
import GrowFaster from './components/GrowFaster'
import HireTopTalent from './components/HireTopTalent'
import BackgroundContainer from './components/BackgroundContainer'
import PictureWall from 'main_app/components/PictureWall'

import useLandingVariantByName from './hooks/useLandingVariantByName'

function LandingPage () {
  const { params } = useRouteMatch('/:name')
  const { landing } = useLandingVariantByName(params.name)

  usePageMetadata({
    title: landing.metadata.title,
    description: landing.metadata.description
  })

  return (
    <>
      <Article>
        <Header
          landingName={landing.header.landingName}
          title={landing.header.title}
          description={landing.header.description}
          formDescription={landing.header.formDescription}
          formOrigin={landing.header.formOrigin}
          formCustomizations={landing.header.formCustomizations}
          sideImageURL={landing.header.sideImageURL}
          submitButtonText={landing.header.submitButtonText}
          backgroundColor={landing.header.backgroundColor}
        />
        <ReviewCards
          subtitle={landing.reviews.subtitle}
          title={landing.reviews.title}
          description={landing.reviews.description}
          reviews={landing.reviews.reviews}
        />
        <BackgroundContainer backgroundURL={landing.backgrounds.firstBackground} />
        <GrowToday
          subheadingText={landing.growToday.subtitle}
          titleText={landing.growToday.title}
          descriptionText={landing.growToday.description}
          contentText={landing.growToday.content}
          buttonText={landing.growToday.buttonText}
          buttonLink={landing.growToday.buttonLink}
        />
        <BackgroundContainer backgroundURL={landing.backgrounds.secondBackground} />
        <HireTopTalent
          subheadingText={landing.HireTopTalent.subtitle}
          titleText={landing.HireTopTalent.title}
          descriptionText={landing.HireTopTalent.description}
          contentText={landing.HireTopTalent.content}
          buttonText={landing.HireTopTalent.buttonText}
          buttonLink={landing.HireTopTalent.buttonLink}
        />
        <GrowFaster
          subheadingText={landing.GrowFaster.subtitle}
          titleText={landing.GrowFaster.title}
          descriptionText={landing.GrowFaster.description}
          contentText={landing.GrowFaster.content}
          buttonText={landing.GrowFaster.buttonText}
          buttonLink={landing.GrowFaster.buttonLink}

        />
        {landing.availableDevs &&
          <AvailableDevs
            title={landing.availableDevs.title}
            devs={landing.availableDevs.devs}
          />}
        <FullSizeCTA
          title={landing.fullSizeCTA.title}
          subTitle={landing.fullSizeCTA.subTitle}
          ctaText={landing.fullSizeCTA.ctaText}
          ctaToPath={landing.fullSizeCTA.ctaToPath}
          description={landing.fullSizeCTA.description}
        />
      </Article>
      <PictureWall />
      <Footer variant='light' />
    </>
  )
}

export default LandingPage
