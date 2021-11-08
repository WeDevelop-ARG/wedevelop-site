import { useCallback } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import useStoryDetailVariantByName from './hooks/useStoryDetailVariantByName'

import Article from 'main_app/components/Article'
import ClutchWidget from 'main_app/components/ClutchWidget'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import Header from './components/Header'
import NavBar from 'main_app/components/NavBar/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import ScrollTopButton from './components/ScrollTopButton'
import Testimonials from 'main_app/components/Testimonials'
import TestimonialsDecoration from './components/TestimonialsDecoration'
import TextImageGeneric from './components/TextImageGeneric'

import classes from './styles.module.scss'

function StoryDetails () {
  const { params } = useRouteMatch('/portfolio/:name')
  const { storyDetails } = useStoryDetailVariantByName(params.name)

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
        <Testimonials
          reviews={storyDetails.testimonials}
          customDecorations={<TestimonialsDecoration />}
          hideHeader
        />
        <section className={classes.clutchContainer}>
          <ClutchWidget
            variant='dark'
            className={classes.clutchWidget}
          />
        </section>
        <TextImageGeneric
          title={storyDetails.results.title}
          content={storyDetails.results.content}
          imageURL={storyDetails.results.imageURL}
        />
        <GetInTouch />
        <PictureWall contactPagePath={contactPagePath} />
        <ScrollTopButton />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default StoryDetails