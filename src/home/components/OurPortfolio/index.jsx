import useStories from 'portfolio/hooks/useStories'

import PortfolioProjectCard from 'portfolio/components/PortfolioProjectCard'
import Image from 'main_app/components/Image'
import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'

import manExplainingBackground from 'assets/home/man-explaining-background.png'
import rightArrow from 'assets/about_us/nearshore_outsourcing/right_arrow.svg'

import classes from './styles.module.scss'

export default function OurPortfolio () {
  const { stories } = useStories()
  const storiesToShow = stories.filter(story => ['copa', 'ballwiz', 'raft'].includes(story.urlName))

  return (
    <>
      <section className={classes.section}>
        <div className={classes.ourPortfolio}>
          <div className={classes.title}>
            <span className={classes.introTitle}>Our Portfolio</span>
            <h3>Companies Who Trust Us</h3>
            <hr className={classes.horizontalBar} />
          </div>
          <div className={classes.successStories}>
            {storiesToShow.map(story => (
              <PortfolioProjectCard
                key={story.urlName}
                coverImageURL={story.resume.headerImageURL}
                description={story.header.description}
                detailsPagePath={`/about-us/success-stories/${story.urlName}`}
                externalWebsiteURL={story.header.websiteURL}
                logoBackground={story.header.logoBackground}
                logoURL={story.header.logoURL}
                projectName={story.header.title}
                shortDescription={story.header.subtitle}
                tags={story.header.tags}
                className={classes.storyCard}
                imageClassName={classes.storyImage}
                showDetails={false}
              />
            ))}
          </div>
          <div className={classes.knowMore}>
            <h3>+20</h3>
            <p>Discover our Success Stories</p>
            <Button
              variant='link'
              as={InternalLink}
              href='/about-us/success-stories'
            >
              <div className={classes.seeMoreButton}>
                <p className={classes.text}>Know More</p>
                <Image
                  src={rightArrow}
                  alt='right arrow'
                />
              </div>
            </Button>
          </div>
        </div>
      </section>
      <WrappedImage src={manExplainingBackground} alt='' layout='responsive' className={classes.backgroundImage} />
    </>
  )
}
