import { useRouteMatch } from 'react-router'
import classnames from 'classnames'

import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import Footer from 'main_app/components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import Header from './components/Header'
import ReviewCards from './components/ReviewCards'
import FullSizeCTA from '../main_app/components/FullSizeCTA'
import SectionWithSideImage from './components/SectionWithSideImage'

import useLandingVariantByName from './hooks/useLandingVariantByName'

import classes from './styles.module.scss'

function LandingPage () {
  const { params } = useRouteMatch('/:name')
  const { landing } = useLandingVariantByName(params.name)

  usePageMetadata({
    title: landing.metadata.title,
    description: landing.metadata.description
  })

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'dark']}
        pathLogo='#top'
        hideMenu
      />
      <Article>
        <Header
          title={landing.header.title}
          description={landing.header.description}
          formDescription={landing.header.formDescription}
          formOrigin={landing.header.formOrigin}
          formCustomizations={landing.header.formCustomizations}
          sideImageURL={landing.header.sideImageURL}
          submitButtonText={landing.header.submitButtonText}
        />
        <ReviewCards
          title={landing.reviews.title}
          reviews={landing.reviews.reviews}
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
        <FullSizeCTA
          title={landing.fullSizeCTA.title}
          subTitle={landing.fullSizeCTA.subTitle}
          ctaText={landing.fullSizeCTA.ctaText}
          ctaToPath={landing.fullSizeCTA.ctaToPath}
          ctaIncentive={landing.fullSizeCTA.ctaIncentive}
        />
      </Article>
      <Footer variant='light' />
    </>
  )
}

export default LandingPage
