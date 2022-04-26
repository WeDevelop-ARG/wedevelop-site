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

import ThreeReasonsBottomSeparator from 'assets/staff_augmentation/three_reasons_bottom_separator.png'
import HowItWorksBottomSeparator from 'assets/staff_augmentation/how_it_works_bottom_separator.png'
import PortfolioFeatureDisplay from 'portfolio/components/PortfolioFeaturedDIsplay'
import FrequentlyAskedQuestions from './components/FAQs'
import OurServices from './components/OurServices'

export default function LandingPageContent ({
  landing,
  handleContactCTAClick,
  handleScheduleMeetingCTAClick
}) {
  return (
    <>
      <Article>
        <OurServices />
        <HireTopTalent
          subheadingText={landing.HireTopTalent.subtitle}
          titleText={landing.HireTopTalent.title}
          reasonsContent={landing.HireTopTalent.reasons}
          buttonText={landing.HireTopTalent.buttonText}
          handleModal={handleContactCTAClick}
        />
        <BackgroundContainer backgroundURL={ThreeReasonsBottomSeparator} />
        {landing.availableDevs &&
          <AvailableDevs
            subtitle={landing.availableDevs.subtitle}
            title={landing.availableDevs.title}
            description={landing.availableDevs.description}
            devs={landing.availableDevs.devs}
            buttonText={landing.availableDevs.buttonText}
            handleModal={handleContactCTAClick}
          />}
        {landing.hideHowDoesItWork ||
          <HowDoesItWorks
            handleContactCTAClick={handleContactCTAClick}
            handleScheduleMeetingCTAClick={handleScheduleMeetingCTAClick}
          />}
        <BackgroundContainer backgroundURL={HowItWorksBottomSeparator} />
        <SkillSet
          title={landing.skillSet?.title}
          subtitle={landing.skillSet?.subtitle}
          ctaText={landing.skillSet?.ctaText}
          skillSet={landing.skillSet?.positions}
          onCTAClick={handleContactCTAClick}
        />
        <PortfolioFeatureDisplay
          title={landing.portfolioFeaturedDisplay.title}
          subtitle={landing.portfolioFeaturedDisplay.subtitle}
          description={landing.portfolioFeaturedDisplay.description}
          buttonText={landing.portfolioFeaturedDisplay.buttonText}
        />
        <ReviewCards
          subtitle={landing.reviewsHeading.subtitle}
          title={landing.reviewsHeading.title}
          description={landing.reviewsHeading.description}
          reviews={landing.reviews}
          buttonText={landing.reviewsHeading.buttonText}
          handleModal={handleContactCTAClick}
        />
        <FrequentlyAskedQuestions
          icon={landing.FAQs.icon}
          title={landing.FAQs.title}
          description={landing.FAQs.description}
          noAnswerCTA={landing.FAQs.noAnswerCTA}
          onCTAClick={handleContactCTAClick}
          frequentlyQuestions={landing.FAQs.frequentlyQuestions}
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
      <Footer />
    </>
  )
}
