import Article from 'main_app/components/Article'
import Footer from './components/Footer'
import FullSizeCTA from './components/FullSizeCTA'
import HowDoesItWorks from 'main_app/components/HowDoesItWorks'
import PictureWall from 'main_app/components/PictureWall'

import FrequentlyAskedQuestions from './components/FAQs'
import OurServices from './components/OurServices'
import FiguresFacts from './components/FiguresFacts'
import Testimonials from './components/Testimonials'

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
        <Testimonials />
        <HowDoesItWorks
          handleContactCTAClick={handleContactCTAClick}
          handleScheduleMeetingCTAClick={handleScheduleMeetingCTAClick}
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
