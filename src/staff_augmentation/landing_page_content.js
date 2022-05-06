import Article from 'main_app/components/Article'
import Footer from './components/Footer'
import FullSizeCTA from './components/FullSizeCTA'
import HowDoesItWorks from 'main_app/components/HowDoesItWorks'
import PictureWall from 'main_app/components/PictureWall'
import ReviewCards from './components/ReviewCards'
import SkillSet from './components/SkillSet'

import PortfolioFeatureDisplay from 'portfolio/components/PortfolioFeaturedDIsplay'
import FrequentlyAskedQuestions from './components/FAQs'
import OurServices from './components/OurServices'
import FiguresFacts from './components/FiguresFacts'

export default function LandingPageContent ({
  landing,
  handleContactCTAClick,
  handleScheduleMeetingCTAClick
}) {
  return (
    <>
      <Article>
        <OurServices />
        <FiguresFacts />
        <HowDoesItWorks
          handleContactCTAClick={handleContactCTAClick}
          handleScheduleMeetingCTAClick={handleScheduleMeetingCTAClick}
        />
        <ReviewCards
          subtitle={landing.reviewsHeading.subtitle}
          title={landing.reviewsHeading.title}
          description={landing.reviewsHeading.description}
          reviews={landing.reviews}
          buttonText={landing.reviewsHeading.buttonText}
          handleModal={handleContactCTAClick}
        />
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
