import { HashLink } from 'react-router-hash-link'

import PortfolioProjectCard from 'portfolio/components/PortfolioProjectCard'
import useProjectCards from '../PortfolioProjectCard/hooks/useProjectCards'
import Image from 'main_app/components/Image'

import Arrow from 'assets/portfolio/arrow.svg'

import classes from './styles.module.scss'

function SimilarStories () {
  const n = 3
  const websiteURL = window.location.href
  const projectCards = useProjectCards().filter(projectCard => projectCard.externalWebsiteURL !== websiteURL)

  return (
    <section id='stories' className={classes.sectionStories}>
      <div>
        <p className={classes.subheadingText}>success stories</p>
        <h2 className={classes.titleText}>Similar stories to read</h2>
        <hr className={classes.horizontalBar} />
        <HashLink smooth to={projectCards.detailsPagePath} className={classes.viewAll}>
          View All
          <Image src={Arrow} alt='' className={classes.arrow} />
        </HashLink>
      </div>
      <div className={classes.projectCards}>
        {projectCards.slice(0, n).map(({ id, ...props }) => (
          <PortfolioProjectCard
            key={id}
            {...props}
          />
        ))}
      </div>
    </section>
  )
}

export default SimilarStories
