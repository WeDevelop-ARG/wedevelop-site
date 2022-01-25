import { HashLink } from 'react-router-hash-link'

import Image from 'main_app/components/Image'
import PortfolioProjectCard from 'portfolio/components/PortfolioProjectCard'

import Arrow from 'assets/portfolio/arrow.svg'

import { useSimilarStories } from '../../hooks/useSimilarStories'

import classes from './styles.module.scss'

function SimilarStories ({ storyName }) {
  const { similarStories } = useSimilarStories({ amount: 3, storyName })

  return (
    <>
      <section id='stories' className={classes.sectionContainer}>
        <div>
          <p className={classes.subheadingText}>success stories</p>
          <h2 className={classes.titleText}>Similar stories to read</h2>
          <hr className={classes.horizontalBar} />
          <HashLink smooth to='/portfolio#top' className={classes.viewAll}>
            View All
            <Image src={Arrow} alt='' className={classes.arrow} />
          </HashLink>
        </div>
        <div className={classes.projectCards}>
          {similarStories.map(story => (
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
      </section>
    </>
  )
}

export default SimilarStories
