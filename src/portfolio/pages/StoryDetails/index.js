import { useCallback } from 'react'
import { isEmpty, isNil } from 'lodash'

import Article from 'main_app/components/Article'
import ClutchWidget from 'main_app/components/ClutchWidget'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import NavBar from 'main_app/components/NavBar/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import SimilarStories from 'portfolio/components/SimilarStories'
import StoryHeader from '../../components/StoryHeader'
import PortfolioTestimonial from '../../components/PortfolioTestimonial'
import TextImageGeneric from '../../components/TextImageGeneric'
import TechStackTexts from 'portfolio/components/TechStackTexts'
import TechStackIcons from 'portfolio/components/TechStackIcons'

import useStoryByName from '../../hooks/useStoryByName'

import classes from './styles.module.scss'
import { useRouter } from 'next/router'
import PageMetadata from 'utils/marketing/PageMetadata'

function StoryDetails ({ name }) {
  const { push, pathname } = useRouter()
  const { storyDetails } = useStoryByName(name)

  const contactPagePath = `/portfolio/${name}/contact`

  const handleClose = useCallback(() => {
    push(`/portfolio/${name}`)
  }, [name, push])

  const withoutTestimonial = isEmpty(storyDetails?.testimonials)

  if (isNil(storyDetails)) { return null }
  return (
    <>
      <PageMetadata
        title={storyDetails.metadata.title}
        description={storyDetails.metadata.description}
      />
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
        {!withoutTestimonial &&
          <PortfolioTestimonial
            review={storyDetails.testimonial}
          />}
        {storyDetails.reviewedOnClutch &&
          <section className={classes.clutchContainer}>
            <ClutchWidget variant='dark' className={classes.clutchWidget} />
          </section>}
        <TextImageGeneric
          title={storyDetails.solution.title}
          content={storyDetails.solution.content}
          imageURL={storyDetails.solution.imageURL}
          withoutTestimonials={withoutTestimonial}
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
        <SimilarStories storyName={name} />
        <GetInTouch contactPagePath={contactPagePath} />
        <PictureWall />
      </Article>
      {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
      <Footer variant='light' />
    </>
  )
}

export default StoryDetails
