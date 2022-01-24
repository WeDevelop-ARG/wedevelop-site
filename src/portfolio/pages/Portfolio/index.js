import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import useStories from '../../hooks/useStories'

import Article from 'main_app/components/Article'
import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import Image from 'main_app/components/Image'
import PortfolioHeader from 'portfolio/components/PortfolioHeader'
import NavBar from 'main_app/components/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import PortfolioProjectCard from 'portfolio/components/PortfolioProjectCard'

import DotsPattern from 'assets/home/dots_pattern.svg'
import PortfolioImageSeparator from 'assets/portfolio/portfolio_image_separator.png'

import classes from './styles.module.scss'

function Portfolio () {
  const { stories } = useStories()
  const contactPagePath = '/portfolio/contact'
  const match = useRouteMatch(contactPagePath)
  const history = useHistory()
  const handleClose = useCallback(() => {
    history.push('/portfolio')
  }, [history])

  return (
    <>
      <NavBar
        variant={['solid', 'dark']}
        variantAtScrollTop={['transparent', 'light']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <PortfolioHeader />
        <section id='portfolio' className={classes.sectionPortfolio}>
          <div>
            <h2 className={classes.titleText}>Our Portfolio</h2>
          </div>
          <div className={classes.projectCards}>
            {stories.map(story => (
              <PortfolioProjectCard
                key={story.urlName}
                coverImageURL={story.resume.headerImageURL}
                description={story.header.description}
                detailsPagePath={`/portfolio/${story.urlName}#top`}
                externalWebsiteURL={story.header.websiteURL}
                logoBackground={story.header.logoBackground}
                logoURL={story.header.logoURL}
                projectName={story.header.title}
                shortDescription={story.header.subtitle}
                tags={story.header.tags}
              />
            ))}
          </div>
          <Image src={DotsPattern} alt='' className={classes.topRightPattern} />
          <div className={classes.filledCircle} />
          <div className={classes.emptyCircle} />
          <div className={classes.smallBlurCircle} />
          <div className={classes.bottomFilledCircle} />
          <div className={classes.bottomEmptyCircle} />
          <div className={classes.bottomSmallBlurCircle} />
          {match?.isExact && <ContactModal isOpen onRequestClose={handleClose} />}
        </section>
        <BackgroundContainer backgroundURL={PortfolioImageSeparator} />
        <GetInTouch contactPagePath={contactPagePath} />
        <PictureWall />
      </Article>
      <Footer variant='light' />
    </>
  )
}

export default Portfolio
