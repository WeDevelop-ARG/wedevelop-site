import { useCallback } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar/NavBar'
import Article from 'main_app/components/Article'
import TextImageGeneric from './components/TextImageGeneric'
import GetInTouch from 'main_app/components/GetInTouch'
import PictureWall from 'main_app/components/PictureWall'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'

import useStoryDetailVariantByName from './hooks/useStoryDetailVariantByName'

function StoryDetails () {
  const { params } = useRouteMatch('/portfolio/:name')
  console.log(params)
  const { storyDetails } = useStoryDetailVariantByName(params.name)
  console.log(storyDetails)

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
        <GetInTouch />
        <PictureWall contactPagePath={contactPagePath} />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default StoryDetails
