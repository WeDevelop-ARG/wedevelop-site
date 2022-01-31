import useMediaQuery from 'utils/use_media_query'

import Button from 'main_app/components/Button'

import WhiteBackwardArrow from 'assets/portfolio/white_backward_arrow.component.svg'
import ProjectLogo from '../ProjectLogo'

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
    <>
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
          objectFit='cover'
          position='bottom'
          className={classes.headerBackground}
        />
        <ProjectLogo logoURL={logoURL} className={classes.projectLogo} {...logoStyleProp} />
      </div>
      <section className={classes.headerContainer}>
        <div className={classes.content}>
          <p className={classes.heading}>{heading}</p>
          <div className={classes.titleContainer}>
            <h2 className={classes.title}>{title}</h2>
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
        <WrappedImage src={imageURL} alt='' className={classes.bottomImg} />
        <div className={classes.leftFilledCircle} aria-hidden='true' />
        <div className={classes.filledCircle} aria-hidden='true' />
        <div className={classes.emptyCircle} aria-hidden='true' />
        <div className={classes.emptyDashedCircle} aria-hidden='true' />
        <div className={classes.smallBlurCircle} aria-hidden='true' />
      </section>
    </>
  )
}

export default StoryHeader
