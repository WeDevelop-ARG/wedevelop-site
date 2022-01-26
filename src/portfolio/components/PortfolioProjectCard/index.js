import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import classNames from 'classnames'

import Button from 'main_app/components/Button'
import Image from 'main_app/components/Image'
import ProjectLogo from '../ProjectLogo'

import { ReactComponent as World } from 'assets/portfolio/world.svg'
import { ReactComponent as BlueArrow } from 'assets/portfolio/arrow.svg'
import { ReactComponent as WhiteArrow } from 'assets/portfolio/white_horizontal_arrow.svg'

import classes from './styles.module.scss'

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
  const cantidadCaracteres = 145
  const index = description.substring(0, cantidadCaracteres).lastIndexOf(' ')
  const newDescription = description.substring(0, index).concat('...')
  return (
    <HashLink
      to={detailsPagePath}
      smooth
      className={classes.container}
      onMouseOver={() => setIsOnHover(true)}
      onMouseOut={() => setIsOnHover(false)}
    >
      <Image
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
            >
              <World role='presentation' className={classes.world} />
            </a>
          )}
        </div>
        <p className={classes.shortDescription}>{shortDescription}</p>
        <div className={classes.tagsContainer}>
          {tags.map((tag) => (
            <span className={classes.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={classes.description}>{newDescription}</p>
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
    </HashLink>
  )
}

export default PortfolioProjectCard
