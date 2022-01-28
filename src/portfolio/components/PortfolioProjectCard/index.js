import { useState } from 'react'
import classNames from 'classnames'

import Button from 'main_app/components/Button'
import ProjectLogo from '../ProjectLogo'
import useMediaQuery from 'utils/use_media_query'
import { forPhoneOnly } from 'styles/media_queries'

import World from 'assets/portfolio/world.svg'
import BlueArrow from 'assets/portfolio/arrow.component.svg'
import WhiteArrow from 'assets/portfolio/white_horizontal_arrow.component.svg'

import classes from './styles.module.scss'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'

function PortfolioProjectCard ({
  coverImageURL,
  logoURL,
  logoBackground,
  externalWebsiteURL,
  projectName,
  shortDescription,
  tags,
  description,
  detailsPagePath
}) {
  const logoStyleProp = {}
  if (logoBackground.startsWith('#')) {
    logoStyleProp.style = { backgroundColor: logoBackground }
  } else {
    logoStyleProp.style = { backgroundImage: logoBackground }
  }
  const [isOnHover, setIsOnHover] = useState(false)
  const isPhoneOnly = useMediaQuery(forPhoneOnly)
  const cantidadCaracteres = 145
  const index = description.substring(0, cantidadCaracteres).lastIndexOf(' ')
  const newDescription = description.substring(0, index).concat('...')

  return (
    <InternalLink
      href={detailsPagePath}
      className={classes.container}
      onMouseOver={() => setIsOnHover(true)}
      onMouseOut={() => setIsOnHover(false)}
    >
      <>
        <WrappedImage
          src={coverImageURL}
          alt={shortDescription}
          objectFit='cover'
          position='bottom'
          placeholderColor='#FFF'
          className={classes.headerImage}
        />
        <ProjectLogo
          logoURL={logoURL}
          projectName={projectName}
          className={classes.logo}
          {...logoStyleProp}
        />
        <div className={classes.projectDetails}>
          <div className={classes.header}>
            <h3 className={classes.projectName}>{projectName}</h3>
            {externalWebsiteURL && (
              <a
                href={externalWebsiteURL}
                target='_blank'
                rel='noopener noreferrer'
                onClick={e => { e.stopPropagation() }}
              >
                <WrappedImage src={World} className={classes.world} />
              </a>
            )}
          </div>
          <p className={classes.shortDescription}>{shortDescription}</p>
          {!isPhoneOnly && (
            <>
              <div className={classes.tagsContainer}>
                {tags.map((tag) => (
                  <span className={classes.tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={classes.description}>{newDescription}</p>
            </>
          )}
          <Button
            variant={isOnHover ? 'primary' : 'link'}
            iconRight={isOnHover ? <WhiteArrow /> : <BlueArrow />}
            className={classNames(classes.readMore, {
              [classes.readMoreWhite]: isOnHover
            })}
          >
            Read More
          </Button>
        </div>
      </>
    </InternalLink>
  )
}

export default PortfolioProjectCard
