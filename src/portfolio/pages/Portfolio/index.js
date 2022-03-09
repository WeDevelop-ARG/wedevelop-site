import { useCallback } from 'react'

import useStories from '../../hooks/useStories'

import Article from 'main_app/components/Article'
import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import ContactModal from 'main_app/components/ContactModal'
import Footer from 'main_app/components/Footer'
import GetInTouch from 'main_app/components/GetInTouch'
import NavBar from 'main_app/components/NavBar'
import PictureWall from 'main_app/components/PictureWall'
import PortfolioHeader from 'portfolio/components/PortfolioHeader'
import PortfolioProjectCard from 'portfolio/components/PortfolioProjectCard'
import PortfolioHeaderBackground from 'assets/portfolio/portfolio_header_background.svg'
import PortfolioImageSeparator from 'assets/portfolio/portfolio_image_separator.png'
import InternalLink from 'main_app/components/InternalLink'

import classes from './styles.module.scss'
import { useRouter } from 'next/router'

function Portfolio () {
  const { stories } = useStories()
  const contactPagePath = '/portfolio/contact'
  const { pathname, push } = useRouter()
  const handleClose = useCallback(() => {
    push('/career', undefined, { shallow: true, scroll: false })
  }, [push])

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
          <div className={classes.filledCircle} />
          <div className={classes.emptyCircle} />
          <div className={classes.smallBlurCircle} />
          <div className={classes.bottomFilledCircle} />
          <div className={classes.bottomEmptyCircle} />
          <div className={classes.bottomSmallBlurCircle} />
          {pathname === contactPagePath && <ContactModal isOpen onRequestClose={handleClose} />}
        </section>
        <div className={classes.portfolioProjectPreShowcase} style={{ backgroundImage: `url(${PortfolioHeaderBackground.src})` }}>
          <div className={classes.portfolioFeatured}>
            <h3>Our Portfolio</h3>
            <h4>See what's possible</h4>
            <p>More than 20 companies have trust on us!</p>
            <hr className={classes.horizontalBar} />
            <InternalLink
              href='/portfolio'
              className={classes.container}
            >
              <button>View More</button>
            </InternalLink>
          </div>
          <div className={classes.portfolioProjectDisplayWrapper}>
            {stories.map((story, i) => {
              if (i < 3) {
                return (
                  <InternalLink
                    href={`/portfolio/${story.urlName}`}
                    className={classes.container}
                  >
                    <div className={classes.portfolioProjectPreview} key={i} style={{ backgroundImage: `url(${story.header.imageURL.src})` }}>
                      <div className={classes.portfolioProjectCompanyLogo} style={{ backgroundColor: story.header.logoBackground }}>
                        <img src={story.header.logoURL.src} alt={`logo-${story.urlName}`} />
                      </div>
                    </div>
                  </InternalLink>
                )
              } else {
                return null
              }
            }
            )}
          </div>
        </div>
        <BackgroundContainer backgroundURL={PortfolioImageSeparator} />
        <GetInTouch contactPagePath={contactPagePath} />
        <PictureWall />
      </Article>
      <Footer variant='light' />
    </>
  )
}

export default Portfolio
