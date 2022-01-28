import { useCallback } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { isEmpty } from 'lodash'

import Article from 'main_app/components/Article'
import ClutchWidget from 'main_app/components/ClutchWidget'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import NavBar from 'main_app/components/NavBar/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import SimilarStories from 'portfolio/components/SimilarStories'
import StoryHeader from '../../components/StoryHeader'
import Testimonials from 'main_app/components/Testimonials'
import TestimonialsDecoration from '../../components/TestimonialsDecoration'
import TextImageGeneric from '../../components/TextImageGeneric'
import TechStackTexts from 'portfolio/components/TechStackTexts'
import TechStackIcons from 'portfolio/components/TechStackIcons'

import useStoryByName from '../../hooks/useStoryByName'
import usePageMetadata from 'utils/marketing/use_page_metadata'

import classes from './styles.module.scss'

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
  const withoutTestimonials = isEmpty(storyDetails.testimonials)

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'light']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <StoryHeader
          backgroundURL={storyDetails.header.backgroundURL}
          mobileBackgroundURL={storyDetails.header.mobileBackgroundURL}
          logoURL={storyDetails.header.logoURL}
          heading={storyDetails.header.heading}
          title={storyDetails.header.title}
          subtitle={storyDetails.header.subtitle}
          tags={storyDetails.header.tags}
          description={storyDetails.header.description}
          imageURL={storyDetails.header.imageURL}
          logoBackground={storyDetails.header.logoBackground}
        />
        <TextImageGeneric
          title={storyDetails.challenge.title}
          content={storyDetails.challenge.content}
        />
        {!withoutTestimonials &&
          <>
            <Testimonials
              reviews={storyDetails.testimonials}
              customDecorations={<TestimonialsDecoration />}
              hideHeader
            />
            <section className={classes.clutchContainer}>
              <ClutchWidget variant='dark' className={classes.clutchWidget} />
            </section>
          </>}
        <TextImageGeneric
          title={storyDetails.solution.title}
          content={storyDetails.solution.content}
          imageURL={storyDetails.solution.imageURL}
          withoutTestimonials={withoutTestimonials}
        />
        {!isEmpty(storyDetails.techStackContent) && (
          <TechStackTexts
            title={storyDetails.techStackContent.title}
            content={storyDetails.techStackContent.content}
          />
        )}
        {!isEmpty(storyDetails.techStackIcons) && (
          <TechStackIcons icons={storyDetails.techStackIcons} />
        )}
        <SimilarStories storyName={params.name} />
        <GetInTouch contactPagePath={contactPagePath} />
        <PictureWall />
      </Article>
      {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default StoryDetails
