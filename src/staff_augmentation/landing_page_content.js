import Article from 'main_app/components/Article'
import AvailableDevs from './components/AvailableDevs'
import BackgroundContainer from './components/BackgroundContainer'
import Footer from './components/Footer'
import FullSizeCTA from './components/FullSizeCTA'
import HireTopTalent from './components/HireTopTalent'
import HowDoesItWorks from 'main_app/components/HowDoesItWorks'
import PictureWall from 'main_app/components/PictureWall'
import ReviewCards from './components/ReviewCards'
import SkillSet from './components/SkillSet'
import LatamTalent from './components/LatamTalent'

export default function LandingPageContent ({
  landing,
  handleContactCTAClick
}) {
  return (
    <>
      <Article>
        <LatamTalent
          subtitle={landing.latamTalent?.subtitle}
          title={landing.latamTalent?.title}
          text={landing.latamTalent?.text}
          onCTAClick={handleContactCTAClick}
          ctaText={landing.latamTalent?.ctaText}
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
        {landing.hideHowDoesItWork || <HowDoesItWorks />}
        <SkillSet
          title={landing.skillSet?.title}
          subtitle={landing.skillSet?.subtitle}
          ctaText={landing.skillSet?.ctaText}
          skillSet={landing.skillSet?.positions}
          onCTAClick={handleContactCTAClick}
        />
        <ReviewCards
          subtitle={landing.reviewsHeading.subtitle}
          title={landing.reviewsHeading.title}
          description={landing.reviewsHeading.description}
          reviews={landing.reviews}
          buttonText={landing.reviewsHeading.buttonText}
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
    </>
  )
}
