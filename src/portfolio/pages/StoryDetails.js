import { useCallback } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar/NavBar'
import Article from 'main_app/components/Article'
import Header from '../components/Header'
import TextImageGeneric from '../components/TextImageGeneric'
import GetInTouch from 'main_app/components/GetInTouch'
import PictureWall from 'main_app/components/PictureWall'
import ScrollTopButton from '../components/ScrollTopButton'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'

import useStoryByName from '../hooks/useStoryByName'
import usePageMetadata from 'utils/marketing/use_page_metadata'
import SimilarStories from 'portfolio/components/SimilarStories'

function StoryDetails () {
  const { params } = useRouteMatch('/portfolio/:name')
  const { storyDetails } = useStoryByName(params.name)

  usePageMetadata({
    title: storyDetails.metadata.title,
    description: storyDetails.metadata.description
  })

  const contactPagePath = `/portfolio/${params.name}/contact`
  const match = useRouteMatch(contactPagePath)
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push(`/portfolio/${params.name}`)
  }, [history, params])

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'light']}
      />
      <Article>
        <Header
          backgroundURL={storyDetails.header.backgroundURL}
          logoURL={storyDetails.header.logoURL}
          heading={storyDetails.header.heading}
          title={storyDetails.header.title}
          subtitle={storyDetails.header.subtitle}
          tags={storyDetails.header.tags}
          description={storyDetails.header.description}
          websiteURL={storyDetails.header.websiteURL}
          imageURL={storyDetails.header.imageURL}
        />
        <TextImageGeneric
          title={storyDetails.challenge.title}
          content={storyDetails.challenge.content}
          hideDecoration
        />
        <TextImageGeneric
          title={storyDetails.results.title}
          content={storyDetails.results.content}
          imageURL={storyDetails.results.imageURL}
        />
        <GetInTouch contactPagePath={contactPagePath} />
        <SimilarStories storyName={params.name} />
        <PictureWall contactPagePath={contactPagePath} />
        <ScrollTopButton />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default StoryDetails
