import classNames from 'classnames'
import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'
import useStories from '../../hooks/useStories'
import classes from './styles.module.scss'

function PortfolioFeatureDisplay ({ title, subtitle, description, buttonText }) {
  const { stories } = useStories()
  const defaultProjectPreviewImgSizeInPx = 150
  const defaultCompanyLogoImgSizeInPx = 40
  return (
    <section className={classes.portfolioProjectPreShowcase}>
      <div className={classes.portfolioFeaturedWrapper}>
        <div className={classes.portfolioFeatured}>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p>{description}</p>
          <hr className={classes.horizontalBar} />
          <Button
            as={InternalLink}
            href='/portfolio'
            isAnchor
            variant={['secondary', 'light']}
            className={classes.viewMoreButton}
          >
            {buttonText}
          </Button>
        </div>
        <div className={classes.portfolioProjectDisplayWrapper}>
          {stories.slice(0, 3).map((story, i) => {
            return (
              <InternalLink
                key={i}
                href={`/portfolio/${story.urlName}`}
                className={classes.container}
                title={`Go to portfolio entry for ${story.header.title}`}
              >
                <div className={classes.portfolioProjectWrapper}>
                  <WrappedImage
                    layout='fill'
                    src={story.header.imageURL.src}
                    alt=''
                    width={defaultProjectPreviewImgSizeInPx}
                    height={defaultProjectPreviewImgSizeInPx}
                    className={classes.portfolioProjectPreview}
                    objectFit='cover'
                    objectPosition='center'
                  />
                  <div className={classes.portfolioProjectCompanyLogoWrapper} style={{ backgroundColor: story.header.logoBackground }}>
                    <WrappedImage
                      layout='fill'
                      src={story.header.logoURL.src}
                      alt={`logo-${story.urlName}`}
                      width={defaultCompanyLogoImgSizeInPx}
                      height={defaultCompanyLogoImgSizeInPx}
                      className={classes.portfolioProjectCompanyLogo}
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                </div>
              </InternalLink>
            )
          })}
        </div>
      </div>
      <Button
        as={InternalLink}
        href='/portfolio'
        isAnchor
        variant={['secondary', 'light']}
        className={classNames(classes.viewMoreButton, classes.mobile)}
      >
        {buttonText}
      </Button>
    </section>
  )
}

export default PortfolioFeatureDisplay
