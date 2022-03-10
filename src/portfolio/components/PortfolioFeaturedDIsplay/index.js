
import PortfolioHeaderBackground from 'assets/portfolio/portfolio_header_background.svg'
import InternalLink from 'main_app/components/InternalLink'
import useStories from '../../hooks/useStories'
import classes from './styles.module.scss'

function PortfolioFeatureDisplay () {
  const { stories } = useStories()

  return (
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
  )
}

export default PortfolioFeatureDisplay
