import { useCallback } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import NavBar from 'main_app/components/NavBar'
import Article from 'main_app/components/Article'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import Image from 'main_app/components/Image'
import PortfolioProjectCard from 'portfolio/components/PortfolioProjectCard'
import useStories from '../../hooks/useStories'

import DotsPattern from 'assets/home/dots_pattern.svg'

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
        variantAtScrollTop={['transparent', 'dark']}
        contactPagePath={contactPagePath}
      />
      <Article>
        <section id='portfolio' className={classes.sectionPortfolio}>
          <div>
            <p className={classes.subheadingText}>success stories</p>
            <h2 className={classes.titleText}>Our Portfolio</h2>
            <hr className={classes.horizontalBar} />
          </div>
          <div className={classes.projectCards}>
            {stories.map(story => (
              <PortfolioProjectCard
                key={story.urlName}
                coverImageURL={story.resume.headerImageURL}
                description={story.header.description}
                detailsPagePath={`/portfolio/${story.urlName}`}
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
      </Article>
      <Footer variant='light' />
    </>
  )
}

export default Portfolio
