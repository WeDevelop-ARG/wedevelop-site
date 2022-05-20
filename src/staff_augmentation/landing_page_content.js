import Article from 'main_app/components/Article'
import Footer from './components/Footer'
import FullSizeCTA from './components/FullSizeCTA'
import HowDoesItWorks from 'main_app/components/HowDoesItWorks'

import FrequentlyAskedQuestions from './components/FAQs'
import OurServices from './components/OurServices'
import FiguresFacts from './components/FiguresFacts'
import Testimonials from './components/Testimonials'
import CTABannerSucceed from './components/CTABannerSucceed'
import BackgroundContainer from './components/BackgroundContainer'
import SeparatorImage from 'assets/staff_augmentation/picture-background.png'
import SeparatorImageMobile from 'assets/staff_augmentation/picture-background-mobile.png'
import FooterBackground from 'assets/staff_augmentation/footer/background.svg'
import FooterBackgroundMobile from 'assets/staff_augmentation/footer/background-mobile.svg'

import classes from './styles.module.scss'
import WrappedImage from 'main_app/components/WrappedImage'

export default function LandingPageContent ({
  landing,
  handleContactCTAClick,
  handleScheduleMeetingCTAClick
}) {
  return (
    <div className={classes.container}>
      <Article>
        <OurServices />
        <FiguresFacts />
        <Testimonials />
        <HowDoesItWorks
          handleContactCTAClick={handleContactCTAClick}
          handleScheduleMeetingCTAClick={handleScheduleMeetingCTAClick}
        />
        <CTABannerSucceed onCTAClick={handleContactCTAClick} />
        <FrequentlyAskedQuestions
          icon={landing.FAQs.icon}
          title={landing.FAQs.title}
          description={landing.FAQs.description}
          noAnswerCTA={landing.FAQs.noAnswerCTA}
          onCTAClick={handleContactCTAClick}
          frequentlyQuestions={landing.FAQs.frequentlyQuestions}
        />
        <BackgroundContainer
          className={classes.imageTabletUp}
          backgroundURL={SeparatorImage}
        />
        <BackgroundContainer
          className={classes.imageMobileOnly}
          backgroundURL={SeparatorImageMobile}
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
      <div className={classes.space} />
      <WrappedImage
        className={classes.footerBackground}
        src={FooterBackground}
        layout='fill'
        objectFit='cover'
      />
      <WrappedImage
        className={classes.footerBackgroundMobile}
        src={FooterBackgroundMobile}
        layout='fill'
        objectFit='cover'
        objectPosition='top'
      />
      <Footer />
    </div>
  )
}
