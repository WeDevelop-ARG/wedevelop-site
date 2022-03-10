
import PortfolioHeaderBackground from 'assets/portfolio/portfolio_header_background.svg'
import InternalLink from 'main_app/components/InternalLink'
import useStories from '../../hooks/useStories'
import classes from './styles.module.scss'

function PortfolioFeatureDisplay ({
  title,
  subtitle,
  description,
  buttonText
}) {
  const { stories } = useStories()

  return (
    <div className={classes.portfolioProjectPreShowcase} style={{ backgroundImage: `url(${PortfolioHeaderBackground.src})` }}>
      <div className={classes.portfolioFeatured}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <hr className={classes.horizontalBar} />
        <InternalLink
          href='/portfolio'
          className={classes.container}
        >
          <button>{buttonText}</button>
        </InternalLink>
      </div>
      <div className={classes.portfolioProjectDisplayWrapper}>
        {stories.slice(0, 3).map((story, i) => {
          return (
            <InternalLink
              key={i}
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
        }
        )}
      </div>
    </div>
  )
}

export default PortfolioFeatureDisplay
