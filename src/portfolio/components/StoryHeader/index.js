import useMediaQuery from 'utils/use_media_query'

import Button from 'main_app/components/Button'

import WhiteBackwardArrow from 'assets/portfolio/white_backward_arrow.component.svg'
import DecoCircles from 'assets/portfolio/header_deco_circles.svg'
import ProjectLogo from '../ProjectLogo'
import WorldIcon from 'assets/portfolio/world.svg'

import { forDesktopUp } from 'styles/media_queries'

import classes from './styles.module.scss'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'

function StoryHeader ({
  backgroundURL,
  mobileBackgroundURL,
  logoURL,
  heading,
  title,
  subtitle,
  tags,
  description,
  websiteURL,
  imageURL,
  logoBackground
}) {
  const isDesktopUp = useMediaQuery(forDesktopUp)

  const logoStyleProp = {}
  if (logoBackground.startsWith('#')) {
    logoStyleProp.style = { backgroundColor: logoBackground }
  } else {
    logoStyleProp.style = { backgroundImage: logoBackground }
  }
  return (
    <section className={classes.headerContainer}>
      <div className={classes.decorationWrapper}>
        <Button
          as={InternalLink}
          href='/portfolio'
          variant='link'
          iconLeft={<WhiteBackwardArrow />}
          className={classes.backToList}
        >
          Back to list
        </Button>
        <WrappedImage
          src={isDesktopUp ? backgroundURL : mobileBackgroundURL}
          alt=''
          loading='eager'
          placeholderColor='#333'
          className={classes.headerBackground}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.logoContainer}>
          <ProjectLogo logoURL={logoURL} {...logoStyleProp} />
        </div>
        <p className={classes.heading}>{heading}</p>
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>{title}</h2>
          {websiteURL &&
            <a
              href={websiteURL}
              target='_blank'
              rel='noopener noreferrer'
              className={classes.websiteLink}
            >
              Website
              <WrappedImage src={WorldIcon} alt='' className={classes.worldIcon} />
            </a>}
        </div>
        <hr className={classes.horizontalBar} />
        <h3 className={classes.subtitle}>{subtitle}</h3>
        <div className={classes.tagsContainer}>
          {tags.map((tag) => (
            <span key={tag} className={classes.tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={classes.description}>{description}</p>
      </div>
      <WrappedImage layout='responsive' src={imageURL} alt='' className={classes.bottomImg} />
      <WrappedImage src={DecoCircles} alt='' className={classes.decoCircles} />
    </section>
  )
}

export default StoryHeader
