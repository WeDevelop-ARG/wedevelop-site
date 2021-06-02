import { useRouteMatch } from 'react-router'

import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import Footer from 'main_app/components/Footer'

import usePageMetadata from 'utils/marketing/use_page_metadata'

import Header from './components/Header'
import ReviewCards from './components/ReviewCards'
import GetYourQuote from './components/GetYourQuote'
import DeliverTechSolutions from './components/DeliverTechSolutions'

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
          sideImageURL={landing.header.sideImageURL}
        />
        <ReviewCards
          title={landing.reviews.title}
          reviews={landing.reviews.reviews}
        />
        <DeliverTechSolutions />
        <GetYourQuote />
      </Article>
      <Footer variant='light' />
    </>
  )
}

export default LandingPage
