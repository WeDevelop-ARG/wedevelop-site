import { HashLink } from 'react-router-hash-link'

import useMediaQuery from 'utils/use_media_query'

import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'

import { ReactComponent as WhiteBackwardArrow } from 'assets/portfolio/white_backward_arrow.svg'
import DecoCircles from 'assets/portfolio/header_deco_circles.svg'
import DotsPattern from 'assets/portfolio/dots_pattern.svg'
import ProjectLogo from '../ProjectLogo'
import WorldIcon from 'assets/portfolio/world.svg'

import { forDesktopUp } from 'styles/media_queries'

import classes from './styles.module.scss'

function Header ({
  backgroundURL,
  mobileBackgroundURL,
  logoURL,
  heading,
  title,
  subtitle,
  tags,
  description,
  websiteURL,
  imageURL
}) {
  const isDesktopUp = useMediaQuery(forDesktopUp)

  return (
    <section className={classes.headerContainer}>
      <div className={classes.decorationWrapper}>
        <Button
          as={HashLink}
          to='/portfolio'
          smooth
          variant='link'
          iconLeft={<WhiteBackwardArrow />}
          className={classes.backToList}
        >
          Back to list
        </Button>
        <Image
          src={isDesktopUp ? backgroundURL : mobileBackgroundURL}
          alt=''
          loading='eager'
          placeholderColor='#333'
          className={classes.headerBackground}
        />
        <div className={classes.logoContainer}>
          <ProjectLogo logoURL={logoURL} />
        </div>
      </div>
      <div className={classes.content}>
        <p className={classes.heading}>{heading}</p>
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>{title}</h2>
          <a
            href={websiteURL}
            target='_blank'
            rel='noopener noreferrer'
            className={classes.websiteLink}
          >
            Website
            <Image src={WorldIcon} alt='' className={classes.worldIcon} />
          </a>
        </div>
        <hr className={classes.horizontalBar} />
        <h3 className={classes.subtitle}>{subtitle}</h3>
        <div className={classes.tagsContainer}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={classes.tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className={classes.description}>{description}</p>
      </div>
      <Image
        src={imageURL}
        alt=''
        className={classes.bottomImg}
      />
      <Image
        src={DecoCircles}
        alt=''
        className={classes.decoCircles}
      />
      <Image
        src={DotsPattern}
        alt=''
        className={classes.dotsPattern}
      />
    </section>
  )
}

export default Header
